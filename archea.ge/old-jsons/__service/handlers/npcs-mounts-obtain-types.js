const obtainTypes = [{"id":1,"icon":"coin","name":"Coin"},{"id":2,"icon":"vocation","name":"Vocation Badges"},{"id":3,"icon":"gilda","name":"Gilda Stars"},{"id":4,"icon":"diligence","name":"Diligence Coins"},{"id":5,"icon":"manastorm","name":"Manastorm Crystals"},{"id":6,"icon":"credits","name":"Credits"},{"id":7,"icon":"kyrios","name":"Kyrios Badges"},{"id":8,"icon":"loyalty","name":"Loyalty Tokens"},{"id":9,"icon":"husbandry","name":"Husbandry"},{"id":10,"icon":"craft","name":"Crafting"},{"id":11,"icon":"crate","name":"Archeum Crates / Pack"},{"id":12,"icon":"quest","name":"Quest / Special"}]

module.exports = (req, res) => {
  res.send(obtainTypes)
}
