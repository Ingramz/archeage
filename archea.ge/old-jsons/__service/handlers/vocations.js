const _vocations = [{"name":"Husbandry","group":"Harvesting"},{"name":"Farming","group":"Harvesting"},{"name":"Fishing","group":"Harvesting"},{"name":"Logging","group":"Harvesting"},{"name":"Gathering","group":"Harvesting"},{"name":"Mining","group":"Harvesting"},{"name":"Alchemy","group":"Crafting"},{"name":"Cooking","group":"Crafting"},{"name":"Handicrafts","group":"Crafting"},{"name":"Machining","group":"Crafting"},{"name":"Metalwork","group":"Crafting"},{"name":"Printing","group":"Crafting"},{"name":"Masonry","group":"Crafting"},{"name":"Tailoring","group":"Crafting"},{"name":"Leatherwork","group":"Crafting"},{"name":"Weaponry","group":"Crafting"},{"name":"Carpentry","group":"Crafting"},{"name":"Construction","group":"Special"},{"name":"Larceny","group":"Special"},{"name":"Commerce","group":"Special"},{"name":"Artistry","group":"Special"},{"name":"Exploration","group":"Special"},{"name":"Other","group":null}]




const db = require('better-sqlite3')('74-english.sqlite');

const vocations = db.prepare(`select actability_groups.name as name, actability_view_groups.name as "group"  from actability_groups
left join actability_view_group_elems on actability_view_group_elems.actability_group_id = actability_groups.id
left join actability_view_groups on actability_view_groups.id = actability_view_group_elems.actability_view_group_id
where "group" <> 'Language' or actability_groups.name = 'Other'`).all()

module.exports = (req, res) => {
  res.send(vocations)
}
