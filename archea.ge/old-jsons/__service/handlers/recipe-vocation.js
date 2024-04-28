


const db = require('better-sqlite3')('74-english.sqlite');


const getRecipesList = (name) => {
  const crafts = db.prepare(`
  select crafts.id from skills inner join crafts on crafts.skill_id = skills.id and craft_c_category_id <> 0
  inner join actability_groups on actability_group_id = actability_groups.id
  where lower(actability_groups.name) = ?
  `).all(name).map(x => x.id)

  return crafts
}

module.exports = (req, res) => {
  //res.send([7111])
  res.send(getRecipesList(req.params.vocation))
}
