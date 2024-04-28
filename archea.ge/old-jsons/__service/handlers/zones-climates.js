const climates = [{"id":1,"name":"Arid"},{"id":2,"name":"Subarctic"},{"id":3,"name":"Temperate"},{"id":4,"name":"Tropical"}]

module.exports = (req, res) => {
  res.send(climates)
}
