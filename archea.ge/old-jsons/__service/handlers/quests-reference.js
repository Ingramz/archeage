const reference = {"rewardTypes":[{"id":1,"name":"Coins","icon":"coin"},{"id":2,"name":"XP","icon":"xp"},{"id":3,"name":"Honor Points","icon":"honor"},{"id":4,"name":"Vocation Badges","icon":"vocation"},{"id":5,"name":"Leadership","icon":"leadership"},{"id":6,"name":"Prestige","icon":"prestige"},{"id":7,"name":"Family XP","icon":"familyxp"},{"id":8,"name":"Guild XP","icon":"guildxp"},{"id":9,"name":"Proficiency","icon":"proficiency"},{"id":10,"name":"Crime Points","icon":"crimepoints"},{"id":11,"name":"Title","icon":"title"},{"id":12,"name":"Items","icon":"item"}],"criteriaTypes":[{"id":1,"code":"CHAT"},{"id":2,"code":"COLLECT"},{"id":3,"code":"OTHER"}]}

module.exports = (req, res) => {
  res.send(reference)
}
