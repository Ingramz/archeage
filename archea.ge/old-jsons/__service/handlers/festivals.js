const festivals = [
  {"id":1,"icon":"/images/icon/icon_item_2183.png","name":"Rum Runner Festival 2020","quests":[7804,6784,6759,7802,6758,7803,6761],"regions":["NA"],"active":false},
  {"id":2,"icon":"/images/icon/icon_item_2183.png","name":"Blue Salt Festival","quests":[6902,6904,6901,6899,8815,6862,6900],"regions":["NA"],"active":false},
  {"id":3,"icon":"/images/icon/icon_item_4590.png","name":"6th Anniversary","quests":[9307,9306,9308,9309,9310,9311,9313],"regions":["NA"],"active":false},
  {"id":4,"icon":"/images/icon/icon_item_2184.png","name":"Feastival 2020","quests":[7865,7858,7855,7854,7852,7853,6837],"regions":["NA"],"active":false},
  {"id":5,"icon":"/images/icon/icon_item_3051.png","name":"Hallowtide Festival 2020","quests":[7053,7052,7038,7050,7037,7054,7056,7051,7055],"regions":["NA"],"active":false}
]

module.exports = (req, res) => {
  res.send(festivals)
}
