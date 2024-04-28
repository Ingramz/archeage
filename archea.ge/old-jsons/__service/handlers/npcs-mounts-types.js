const types = [{"id":1,"name":"Starter"},{"id":2,"name":"Standard"},{"id":3,"name":"Climbing"},{"id":4,"name":"Marine"},{"id":5,"name":"Gliding"},{"id":6,"name":"Pack Mule"},{"id":7,"name":"Special"}]

module.exports = (req, res) => {
  res.send(types)
}
