// https://archeage.mokulu.io/service/skills?ids=11429
const skills = [{"id":11429,"skillsetId":4,"name":"Shrug It Off","icon":"icon_skill_will12","requiredLevel":35,"rank":1,"mana":88,"channeled":false,"castTime":0.0,"cooldown":120,"minRange":null,"maxRange":null,"effectRange":null,"description":"Cancels all Confinement effects including Fear, Sleep, Bubble Trap, Freeze, Silence, Petrification, Telekinesis, and Taunt.\r\n\r\n|cBRIGHT_GREEN|This skill does not trigger a Global Cooldown, and can be used during Global Cooldowns.|c|","ancestralElement":"Basic","ancestralParentId":null,"ancestralLevel":null,"effects":[{"id":26,"name":"Shrug It Off","icon":"icon_skill_buff38","negative":false}],"combos":[],"vars":[]}]

// https://archeage.mokulu.io/service/skills?ids=13315,10547,10152,12049,23587
const skills2 = [{"id":10152,"skillsetId":4,"name":"Teleportation","icon":"icon_skill_will11","requiredLevel":20,"rank":1,"mana":29,"channeled":false,"castTime":0.0,"cooldown":35,"minRange":null,"maxRange":null,"effectRange":null,"description":"Magically teleports the caster forward |cORANGE|${effect_range1}.|c|\r\n\r\n|cBRIGHT_GREEN|This skill can be used during Global Cooldowns, and does not trigger a Global Cooldown.\r\nCan't be use while Snared.|c|","ancestralElement":"Basic","ancestralParentId":null,"ancestralLevel":null,"effects":[],"combos":[],"vars":[{"key":"effect_range1","base":15.0}]},{"id":10547,"skillsetId":10,"name":"Resurgence","icon":"icon_skill_love03","requiredLevel":15,"rank":14,"mana":147,"channeled":false,"castTime":0.0,"cooldown":0,"minRange":0,"maxRange":30,"effectRange":null,"description":"Restores ${self_heal_detail} Health to the caster and ${heal_detail} Health to an ally over |cORANGE|${effect_duration1}|c|.\r\n\r\n|cBRIGHT_GREEN|This skill has a reduced Global Cooldown.\r\nHold ALT to use this skill on yourself.|c|","ancestralElement":"Basic","ancestralParentId":null,"ancestralLevel":null,"effects":[{"id":18,"name":"Resurgence","icon":"icon_skill_buff87","negative":false}],"combos":[],"vars":[{"key":"effect_duration1","base":10.0},{"key":"heal_detail","base":538.0,"ratio":280,"powerType":"Healing Power"},{"key":"self_heal_detail","base":377.0,"ratio":196,"powerType":"Healing Power"}]},{"id":12049,"skillsetId":8,"name":"Drop Back","icon":"icon_skill_vocation15","requiredLevel":15,"rank":1,"mana":34,"channeled":false,"castTime":0.0,"cooldown":12,"minRange":null,"maxRange":null,"effectRange":null,"description":"Leap backwards |cORANGE|${effect_range1}|c| to escape a dangerous area or back away from an enemy. Grants the Drop Back buff, eliminating the Cast Time for Flamebolt, Antithesis, and Sunder Earth for |cORANGE|${effect_duration1}|c|. \r\n\r\n|cBRIGHT_GREEN|This skill has a reduced Global Cooldown.\r\nCan't be used while Snared.|c|","ancestralElement":"Basic","ancestralParentId":null,"ancestralLevel":null,"effects":[],"combos":[],"vars":[{"key":"effect_duration1","base":2.5},{"key":"effect_range1","base":10.0}]},{"id":13315,"skillsetId":1,"name":"Tiger Strike","icon":"icon_skill_fight18","requiredLevel":35,"rank":3,"mana":183,"channeled":false,"castTime":0.0,"cooldown":18,"minRange":0,"maxRange":18,"effectRange":null,"description":"Rushes past an enemy, dealing ${damage_detail} Melee Damage.\r\nRepeats up to 5 times if other enemies are nearby.\r\nInflicts |cORANGE|Overpowered|c| on the primary target, reducing Continuous Health Regen -33% for |cORANGE|${effect_duration1}.|c| This effect can stack up to 3 times.\r\n\r\n|cBRIGHT_GREEN|This skill cannot be evaded, blocked, or parried. \r\nCan't be used while Snared.|c|","ancestralElement":"Basic","ancestralParentId":null,"ancestralLevel":null,"effects":[{"id":35,"name":"Overpowered","icon":"icon_skill_buff81","negative":true}],"combos":[{"id":392,"effect":{"id":16,"name":"Shaken","icon":"icon_skill_buff122","negative":true},"text":"Deals an additional +13% damage to Shaken targets.","position":1},{"id":390,"effect":{"id":12,"name":"Slowed","icon":"icon_skill_buff04","negative":true},"applies":{"id":7,"name":"Snared","icon":"icon_skill_buff55","negative":true},"text":"Snares Slowed targets for |cORANGE|${combo_duration1}.|c| (|cORANGE|-50%|c| duration in PvP)","position":2},{"id":389,"effect":{"id":5,"name":"Impaled","icon":"icon_skill_buff124","negative":true},"applies":{"id":20,"name":"Tripped","icon":"icon_skill_buff01","negative":true},"text":"Trips Impaled targets for |cORANGE|${combo_duration2}.|c|","position":3},{"id":391,"effect":{"id":35,"name":"Overpowered","icon":"icon_skill_buff81","negative":true},"applies":{"id":37,"name":"Staggered","icon":"icon_skill_buff05","negative":true},"text":"First Attack: Staggers targets under the effects of Overpowered for |cORANGE|${combo_duration3}|c|","position":4}],"vars":[{"key":"combo_duration1","base":5.0},{"key":"combo_duration2","base":3.0},{"key":"combo_duration3","base":1.0},{"key":"damage_detail","base":668.0,"ratio":130,"powerType":"Melee Attack"},{"key":"effect_duration1","base":8.0}]},{"id":23587,"skillsetId":1,"name":"Behind Enemy Lines","icon":"icon_skill_fight28","requiredLevel":55,"rank":1,"mana":157,"channeled":false,"castTime":0.0,"cooldown":21,"minRange":6,"maxRange":20,"effectRange":4,"description":"Perform a high leap that lands at the target location, dealing ${damage_detail} Melee Damage to all enemies within the area of effect. Inflicts |cORANGE|Shaken|c| on all affected enemies, reducing their Move Speed |cORANGE|${effect_value1}%,|c| Attack Speed |cORANGE|${effect_value2},|c| and Skill Damage |cORANGE|${effect_value3}%|c| for |cORANGE|${effect_duration1}.|c|\r\n\r\n|cBRIGHT_GREEN|Can't be used while Snared.|c|","ancestralElement":"Basic","ancestralParentId":null,"ancestralLevel":null,"effects":[{"id":16,"name":"Shaken","icon":"icon_skill_buff122","negative":true}],"combos":[{"id":418,"effect":{"id":7,"name":"Snared","icon":"icon_skill_buff55","negative":true},"applies":{"id":33,"name":"Distressed","icon":"icon_skill_buff123","negative":true},"text":"Inflicts Distressed on Snared targets for |cORANGE|${combo_duration1}.|c|","position":1},{"id":419,"effect":{"id":4,"name":"Sleeping","icon":"icon_skill_buff19","negative":true},"applies":{"id":20,"name":"Tripped","icon":"icon_skill_buff01","negative":true},"text":"Sleeping targets are Tripped for |cORANGE|${combo_duration2}.|c|","position":2}],"vars":[{"key":"combo_duration1","base":7.0},{"key":"combo_duration2","base":3.0},{"key":"damage_detail","base":576.0,"ratio":110,"powerType":"Melee Attack"},{"key":"effect_duration1","base":3.0},{"key":"effect_value1","base":-27.0},{"key":"effect_value2","base":-75.0},{"key":"effect_value3","base":-8.0}]}]

const db = require('better-sqlite3')('74-english.sqlite');

const createBuff = (id) => {
  const buff = db.prepare('SELECT * FROM buffs WHERE id = ?').get(id)

  if (!buff) {
    console.log('NOT FOUND', id)

    return
  }

  const passive = db.prepare('SELECT * FROM passive_buffs WHERE buff_id = ?').get(buff.id)

  const icon = db.prepare('SELECT * FROM icons WHERE id = ?').get(buff.icon_id).filename.replace(/\.dds$/, '')

  return {
    "id": buff.id,
    "name": buff.name,
    "icon": icon,
    "description": buff.desc,
    "vars": [],
    "requiredLevel": passive && passive.req_points || undefined
  }
}

const getAncestralElement = (n) => {
  switch (n) {
    case 1: return 'Flame'
    case 2: return 'Life'
    case 3: return 'Quake'
    case 4: return 'Stone'
    case 5: return 'Wave'
    case 6: return 'Mist'
    case 7: return 'Gale'
    case 8: return 'Lightning'
  }

  return 'Basic'
}

const getEffects = (skillId) => {
  const effectIcons = db.prepare(`
    SELECT synergy_icon1_buffkind, synergy_icon1_id, synergy_icon2_buffkind, synergy_icon2_id, i1.filename icon1_filename, i2.filename icon2_filename FROM skills
    LEFT JOIN icons i1 ON synergy_icon1_id = i1.id
    LEFT JOIN icons i2 ON synergy_icon2_id = i2.id
    WHERE skills.id = ?
  `).get(skillId)

  const result = []

  if (effectIcons.icon1_filename) {
    result.push({
      "id": effectIcons.synergy_icon1_id,
      "name": "",
      "icon": effectIcons.icon1_filename.substring(0, effectIcons.icon1_filename.length - 4),
      "negative": effectIcons.synergy_icon1_buffkind !== 1
    })
  }

  if (effectIcons.icon2_filename) {
    result.push({
      "id": effectIcons.synergy_icon2_id,
      "name": "",
      "icon": effectIcons.icon2_filename.substring(0, effectIcons.icon2_filename.length - 4),
      "negative": effectIcons.synergy_icon2_buffkind !== 1
    })
  }

  return result
}

const isSpelldanceBuff = (id) => {
  return [
    // Spelldance
    30010,
    30011,
    30012,
    30013,
    30014,
    30015,
    // Swiftblade
    24895,
    24913,
    24909,
    24914,
    24911,
    24910,
  ].includes(id)
}

const createSkill = (id) => {
  const skill = db.prepare('SELECT * FROM skills WHERE id = ?').get(id)

  const ancestralParent = db.prepare('SELECT heir_skills.skill_id, pos, step FROM heir_skills INNER JOIN heir_skill_details ON heir_skills.id = heir_skill_details.heir_skill_id WHERE heir_skill_details.skill_id = ?').get(id)

  //const ancestrals = db.prepare('SELECT heir_skill_details.skill_id FROM heir_skills INNER JOIN heir_skill_details ON heir_skills.id = heir_skill_details.heir_skill_id WHERE heir_skills.skill_id IN (' + '?,'.repeat(skills.length - 1) + '?) ORDER BY step, heir_skill_details.skill_id').all(skills).map(x => x.skill_id)
  //const passives = db.prepare('SELECT * FROM passive_buffs WHERE ability_id = ? ORDER BY req_points').all(id).map(x => x.buff_id)

  if (isSpelldanceBuff(id) || !skill) {
    return createBuff(id)
  }

  //console.log(skill)

  const damageEffect = db.prepare(`select level_md from skill_effects
  left join effects on skill_effects.effect_id = effects.id
  left join damage_effects on actual_id = damage_effects.id
  where skill_id = ? and actual_type = 'DamageEffect'
  order by skill_effects.id limit 1`).get(id)

  const icon = db.prepare('SELECT * FROM icons WHERE id = ?').get(skill.icon_id).filename.replace(/\.dds$/, '')
  const maxSkillRank = skill.level_step == 0 ? 1 : Math.floor((55 - skill.ability_level) / skill.level_step) + 1
  const maxSkillLevel = skill.ability_level + (maxSkillRank - 1) * skill.level_step
  const manaCost = Math.floor((maxSkillLevel * 1.6 + 8) * 3 / 3.65 * skill.mana_level_md + skill.mana_cost)
  const avgDamage =  Math.round((maxSkillLevel * 1.6 + 8) * 3 * (damageEffect?.level_md || 1))

  const varNames = [...skill.desc.matchAll(/\#{([a-z0-9_]+)}/g)]
  const vars = []
  varNames.forEach(varName => {
    if (varName[1] === 'avg_damage') {
      vars.push({
        key: 'avg_damage',
        base: avgDamage
      })
      vars.push({
        key: 'detail_melee_damage',
        base: ''
      })
    } else {
      console.log(skill.id, skill.name, varName[1])
    }

    /*if (varName[1] === 'buff_duration') {

      console.log('id = ', id)
      const duration = db.prepare(`select duration from skill_effects
      inner join effects on skill_effects.effect_id = effects.id
      inner join buff_effects on effects.actual_type = 'BuffEffect' and actual_id = buff_effects.id
      inner join buffs on buff_effects.buff_id = buffs.id
      where skill_id = ?`).get(id).duration

      vars.push({
        name: 'buff_duration',
        value: duration / 1000
      })
    }*/
  })

  return {
    "id": skill.id,
    "skillsetId": skill.ability_id,
    "name": skill.name,
    "icon": icon,
    "requiredLevel": skill.ability_level,
    "rank": maxSkillRank,
    "mana": manaCost,
    "channeled": skill.channeling_time > 0,
    "castTime": skill.casting_time / 1000,
    "cooldown": skill.cooldown_time / 1000,
    "minRange": skill.target_type_id !== 0 && skill.target_type_id !== 7 ? skill.min_range : null,
    "maxRange": skill.target_type_id !== 0 && skill.target_type_id !== 7 ? skill.max_range : null,
    "effectRange": skill.target_area_radius == 0 ? null : skill.target_area_radius,
    "description": skill.desc,
    "ancestralElement": getAncestralElement(ancestralParent && ancestralParent.pos),
    "ancestralParentId": ancestralParent && ancestralParent.skill_id || null,
    "ancestralLevel": ancestralParent && ancestralParent.step && 1 + (ancestralParent.step - 1) * 3 || null,
    "effects": getEffects(skill.id),
    "combos": [],
    "vars": vars
  }
}

module.exports = (req, res) => {
  const ids = req.query.ids.split(',').filter(x => parseInt(x) + '' === x).map(x => parseInt(x))

  res.send(ids.map(x => createSkill(x)).filter(x => x))

  //res.send(skills)
}
