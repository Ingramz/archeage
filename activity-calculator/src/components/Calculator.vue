<template>
  <div class="container mx-auto" style="max-width: 1024px">
    <div class="columns-3 mt-5 divide-x divide-slate-200">
      <div v-for="faction in exileInfo" class="p-4">
        <div class="text-center mb-3">{{ faction.faction }}</div>

        <div v-if="faction.faction === 'PIRATE'" class="mb-2">
          <input type="range" min="0" max="2000" v-model.number="pirateActivity" />
          <input type="text" v-model.number="pirateActivity" size="5" maxlength="5" class="border-b border-b-slate-400 text-center mx-2" />
        </div>

        <div v-if="faction.faction === 'NUIA'" class="mb-2">
          <input type="range" min="0" max="2000" v-model.number="nuiaActvity" />
          <input type="text" v-model.number="nuiaActvity" size="5" maxlength="5" class="border-b border-b-slate-400 text-center mx-2" mx-2 />
        </div>

        <div v-if="faction.faction === 'HARANYA'" class="mb-2">
          <input type="range" min="0" max="2000" v-model.number="haranyaActivity" />
          <input type="text" v-model.number="haranyaActivity" size="5" maxlength="5" class="border-b border-b-slate-400 text-center mx-2" mx-2 />
        </div>

        <div>{{ activityRank(faction.score) }}</div>

        <div class="mb-2">Rating: <span :class="{ 'color-dominant': faction.rating === 'SUPERIOR', 'color-inferior': faction.rating === 'INFERIOR' }">{{ faction.rating === "SUPERIOR" ? 'Dominant' : (faction.rating === 'INFERIOR' ? 'Weak' : 'Neutral') }}</span></div>

        <div class="mb-2">
          <span>Exiles:</span>
          <ul class="ml-2">
            <li v-for="(exiles, otherFaction) of faction.exiles">From {{ otherFaction }}: <span :class="{ 'color-exile': exiles > 0 }">{{ exiles }}</span></li>
          </ul>
        </div>

        <div class="mb-2">
          <span>Alliances:</span>
          <ul class="ml-2">
            <li v-for="(allianceAvailable, otherFaction) of faction.alliance">With {{ otherFaction }}: <span :class="{ 'color-available': allianceAvailable }">{{ allianceAvailable ? 'Available' : 'Unavailable' }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const minActivityForExiles = 700
const minActivityForAlliance = 1000

const oneThreeMinThreshold = 25
const oneTwoDominantThreshold = 10
const oneTwoInferiorThreshold = 25
const twoThreeInferiorThreshold = 5

const pirateActivity = ref(0)
const nuiaActvity = ref(2459)
const haranyaActivity = ref(1942)

const activitySum = computed(() => {
  return Math.max(pirateActivity.value, 0) + Math.max(nuiaActvity.value, 0) + Math.max(haranyaActivity.value, 0)
})

const activityRank = (score) => {
  if (isNaN(score) || score < 0) {
    score = 0
  }

  const table = [
    { title: "Stage 1 - No Activity", value: 0 },
    { title: "Stage 2 - Very Low Activity", value: 300 },
    { title: "Stage 3 - Low Activity", value: 600 },
    { title: "Stage 4 - Fairly Low Activity", value: 900 },
    { title: "Stage 5 - Below Average Activity", value: 1200 },
    { title: "Stage 6 - Average Activity", value: 1500 },
    { title: "Stage 7 - Above Average Activity", value: 1800 },
    { title: "Stage 8 - Fairly High Activity", value: 2000 },
    { title: "Stage 9 - High Activity", value: 2500 },
    { title: "Stage 10 - Very High Activity", value: 3000 },
  ]

  return table.reverse().find((row) => row.value <= score).title
}

const getActivityPercentageDelta = (a, b, sum) => {
  if (sum === 0) {
    return 0
  }

  return Math.round((a - b) * 100 / sum)
}

const getExileAmount = (delta) => {
  if (isNaN(delta) || delta < 0) {
    return 0
  }

  const table = [
    { count: 40, min: 0 },
    { count: 42, min: 20 },
    { count: 44, min: 40 },
    { count: 46, min: 70 },
    { count: 48, min: 80 },
    { count: 50, min: 90 }
  ]

  return table.reverse().find(row => delta >= row.min).count
}

const exileInfo = computed(() => {
  const scores = [
    { faction: 'PIRATE', score: Math.max(pirateActivity.value, 0), alliance: { NUIA: false, HARANYA: false }, exiles: { NUIA: 0, HARANYA: 0 }, rating: 'NEUTRAL' },
    { faction: 'NUIA', score: Math.max(nuiaActvity.value, 0), alliance: { PIRATE: false, HARANYA: false }, exiles: { PIRATE: 0, HARANYA: 0 }, rating: 'NEUTRAL' },
    { faction: 'HARANYA', score: Math.max(haranyaActivity.value, 0), alliance: { PIRATE: false, NUIA: false }, exiles: { PIRATE: 0, NUIA: 0 }, rating: 'NEUTRAL' },
  ]

  const scoresByFaction = {
    PIRATE: scores[0],
    NUIA: scores[1],
    HARANYA: scores[2],
  }

  scores.sort((a, b) => b.score - a.score)

  scores.forEach(score => Object.keys(score.exiles).forEach(faction => score.exiles[faction] = getExileAmount(getActivityPercentageDelta(scoresByFaction[faction].score, score.score, activitySum.value))))

  if (activitySum.value > 0 && minActivityForAlliance < activitySum.value) {
    scores.forEach(score => Object.keys(score.alliance).forEach(faction => score.alliance[faction] = true))
  }

  if (activitySum.value > 0 && minActivityForExiles < activitySum.value) {
    const oneThree = getActivityPercentageDelta(scores[0].score, scores[2].score, activitySum.value)
    const oneTwo = getActivityPercentageDelta(scores[0].score, scores[1].score, activitySum.value)
    const twoThree = getActivityPercentageDelta(scores[1].score, scores[2].score, activitySum.value)

    if (oneThree <= oneThreeMinThreshold) {
      // Fair
    } else {
      scores[0].rating = 'SUPERIOR'
      scores[2].rating = 'INFERIOR'

      if (oneTwo > oneTwoDominantThreshold) {
        if (oneTwo < oneTwoInferiorThreshold) {
          // Do nothing
        } else {
          scores[1].rating = 'INFERIOR'
        }
      } else {
        scores[1].rating = 'SUPERIOR'
      }

      if (twoThree <= twoThreeInferiorThreshold) {
        scores[1].rating = 'INFERIOR'
      }
    }
  }

  scores.forEach(score => Object.keys(score.alliance).forEach(faction => {
    const thirdFaction = Object.keys(score.alliance).find(_faction => _faction !== score.faction && _faction !== faction)

    if (Math.floor((score.score + scoresByFaction[faction].score) * 110 / 200) >= scoresByFaction[thirdFaction].score) {
      score.alliance[faction] = false
      scoresByFaction[faction].alliance[score.faction] = false
    }
  }))

  scores.forEach(score => Object.keys(score.exiles).forEach(faction => {
    if (score.rating !== 'INFERIOR' || scoresByFaction[faction].rating !== 'SUPERIOR') {
      score.exiles[faction] = 0
    }
  }))

  return Object.values(scoresByFaction)
})
</script>

<style scoped>
.color-dominant {
  color: rgb(88, 185, 214);
}

.color-inferior {
  color: rgb(219, 118, 100);
}

.color-exile {
  color: rgb(25, 120, 174);
}

.color-available {
  color: rgb(15, 157, 38);
}
</style>
