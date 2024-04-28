const servers = [
  {
      "id": 13,
      "name": "Ardenia",
      "region": "EU",
      "unchained": true
  },
  {
      "id": 14,
      "name": "Nehliya",
      "region": "EU",
      "unchained": true
  },
  {
      "id": 15,
      "name": "Kraken",
      "region": "NA",
      "unchained": true
  },
  {
      "id": 16,
      "name": "Kyrios",
      "region": "NA",
      "unchained": true
  },
  {
      "id": 17,
      "name": "Leviathan",
      "region": "EU",
      "unchained": false
  },
  {
      "id": 18,
      "name": "Kyprosa",
      "region": "EU",
      "unchained": false
  },
  {
      "id": 19,
      "name": "Ospheros",
      "region": "NA",
      "unchained": false
  },
  {
      "id": 20,
      "name": "Erenor",
      "region": "NA",
      "unchained": false
  },
  {
      "id": 21,
      "name": "Arcadian",
      "region": "EU",
      "unchained": true
  },
  {
      "id": 22,
      "name": "Stormraw",
      "region": "NA",
      "unchained": true
  }
]

module.exports = (req, res) => {
  res.send(servers)
}
