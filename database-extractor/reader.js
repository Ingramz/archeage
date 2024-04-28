const assert = require('node:assert/strict')

const fs = require('fs');

let data = fs.readFileSync(process.argv[2]);

let dict = []

let offset = 0

function consume(char) {
    if (data[offset] === char) {
        offset++
    } else {
        console.log(offset, data[offset], char)
        assert(false)
    }
}

function hasNext() {
    return offset < data.length
}

function peek() {
    return data[offset]
}

function read() {
    return data[offset++]
}

function readString() {
    const type = peek()

    if (type == 0x0) {
        consume(0x0)
        let result = []
        while (peek() != 0x0) {
            result.push(read())
        }
        consume(0x0)

        const str = new TextDecoder().decode(new Uint8Array(result))
        return str
    }

    if (type == 0x1) {
        consume(0x01)
        const addr = readUnsignedInteger()

        if (dict[addr]) {
            return dict[addr]
        }

        if (addr == 0xFFFFFFFF) {
            let result = []
            while (peek() !== 0) {
                result.push(read())
            }
            consume(0x00)
            const str = new TextDecoder().decode(new Uint8Array(result))
            dict.push(str)
            return str
        }
    }

    if (type == 0x02) {
        consume(0x02)
        return null
    }

    console.log(offset, type)
    assert(false)
}

function readFloat() {
    let result = []

    for (let i = 0; i < 8; i++) {
        result.push(read())
    }

    return Buffer.from(result).readDoubleLE()
}

function readInteger() {
    let result = []

    for (let i = 0; i < 4; i++) {
        result.push(read())
    }

    return Buffer.from(result).readInt32LE()
}

function readLong() {
    let result = []

    for (let i = 0; i < 8; i++) {
        result.push(read())
    }

    return Buffer.from(result).readBigInt64LE()
}

function readUnsignedInteger() {
    let result = []

    for (let i = 0; i < 4; i++) {
        result.push(read())
    }

    return Buffer.from(result).readUint32LE()
}

function readBlob() {
    let result = []

    const size = readUnsignedInteger()
    for (let i = 0; i < size; i++) {
        result.push(read())
    }

    return result
}

const schema = require(process.argv[5]);

const Database = require('better-sqlite3')//.verbose();
const db = new Database(':memory:', { verbose: null });

schema.filter(x => !x.skip && x.table_name !== null).forEach(table => {
    let createList = []

    if (table.method === 'LoadSkillTagsRelation' || table.method === 'LoadBuffTagsRelation' || table.method === 'LoadItemTagsRelation' || table.method === 'LoadNpcTagsRelation') {
        return
    } else if (table.table_name === "wearable_slots" && table.method === null) {
        return
    } else if (table.table_name === "item_grades" && table.method === null) {
        return
    } else if (table.table_name === "item_cap_scale_forbids" && table.method === null) {
        return
    } else if (table.table_name === "char_records" && table.method === null) {
        return
    } else if (table.table_name === "grammar_tags" && !table.query.endsWith("1")) {
        return
    } else if (table.table_name === "wearables") {
        if (table.method === 'LoadWearableMagicResistanceBpArray') {
            return
        }

        createList.push("armor_bp INTEGER")
        createList.push("magic_resistance_bp INTEGER")
        createList.push("armor_type_id INTEGER")
        createList.push("slot_type_id INTEGER")

        // TODO: INSERT_LIST
    } else {
        Object.keys(table.schema).forEach(column => {
            if (column.startsWith("SKIP_")) {
                // Do nothing
            } else if (table.schema[column] === 'text') {
                createList.push(`${column} TEXT`)
            } else if (table.schema[column] === 'integer') {
                if (column === 'id' || table.table_name === 'hotkeys' && column === 'action_id' || table.table_name === 'festival_zones' && column === 'zone_group_id' || table.table_name === 'tradegood_priceindices' && column === 'stock' || table.table_name === 'options' && column === 'option_item_type_id') {
                    createList.push(`${column} INTEGER NOT NULL PRIMARY KEY`)
                } else {
                    createList.push(`${column} INTEGER`)
                }
            } else if (table.schema[column] === 'boolean') {
                createList.push(`${column} BOOLEAN`)
            } else if (table.schema[column] === 'real') {
                createList.push(`${column} REAL`)
            } else if (table.schema[column] === 'long') {
                createList.push(`${column} BIGINT`)
            } else if (table.schema[column] === 'blob') {
                createList.push(`${column} BLOB`)
            } else if (Array.isArray(table.schema[column])) {
                if (table.schema[column].length === 2) {
                    if (table.schema[column][0] === 'nullcheck') {
                        // do nothing
                    }
                }
            } else {
                console.log("unknown type " + table.schema[column])
                assert(false)
            }
        })
    }

    //console.log(`CREATE TABLE ${table.table_name} (${createList.join(', ')})`)
    db.exec(`CREATE TABLE ${table.table_name} (${createList.join(', ')})`)
})

schema.forEach(table => {
    if (table.skip) {
        console.log(`Skipping ${table.table_name} [${table.query}]`)
        return
    }

    console.log(`${table.table_name} [${table.query}]`, offset)

    let insertList = []
    if (table.method === 'LoadSkillTagsRelation' || table.method === 'LoadBuffTagsRelation' || table.method === 'LoadItemTagsRelation' || table.method === 'LoadNpcTagsRelation') {
        insertList = null
    } else if (table.table_name === "wearable_slots" && table.method === null) {
        insertList = null
    } else if (table.table_name === "item_grades" && table.method === null) {
        insertList = null
    } else if (table.table_name === "item_cap_scale_forbids" && table.method === null) {
        insertList = null
    } else if (table.table_name === "char_records" && table.method === null) {
        insertList = null
    } else if (table.table_name === null) {
        insertList = null
    } else {
        Object.keys(table.schema).forEach(column => {
            if (column.startsWith("SKIP_")) {
                // Do nothing
            } else if (table.schema[column] === 'text') {
                insertList.push(`${column}`)
            } else if (table.schema[column] === 'integer') {
                insertList.push(`${column}`)
            } else if (table.schema[column] === 'boolean') {
                insertList.push(`${column}`)
            } else if (table.schema[column] === 'real') {
                insertList.push(`${column}`)
            } else if (table.schema[column] === 'long') {
                insertList.push(`${column}`)
            } else if (table.schema[column] === 'blob') {
                insertList.push(`${column}`)
            } else if (Array.isArray(table.schema[column])) {
                if (table.schema[column].length === 2) {
                    if (table.schema[column][0] === 'nullcheck') {
                        // do nothing
                    }
                }
            } else {
                console.log("unknown type " + table.schema[column])
                assert(false)
            }
        })
    }

    const insert = insertList === null ? null : db.prepare(`INSERT INTO ${table.table_name} (${insertList.join(', ')}) VALUES (${insertList.map(() => '?').join(', ')})`)

    let count = null
    if (table.starts_with_count) {
        consume(0x64)
        count = readInteger()
    }
    let rows = 0
    let to_go = table.rows || -1

    while (hasNext() && peek() == 0x64) {
        if (to_go === 0) {
            break
        }
        if (to_go > 0) {
            to_go--
        }

        consume(0x64)

        let set_null = 0
        const row = {}
        Object.keys(table.schema).forEach(column => {
            if (set_null > 0) {
                row[column] = null
                set_null--
                return
            }

            if (table.schema[column] === 'text') {
                row[column] = readString()
            } else if (table.schema[column] === 'integer') {
                row[column] = readInteger()
            } else if (table.schema[column] === 'boolean') {
                assert(peek() == 0x01 || peek() == 0x00)
                row[column] = read() == 0x01
            } else if (table.schema[column] === 'real') {
                row[column] = readFloat()
            } else if (table.schema[column] === 'long') {
                row[column] = readLong()
            } else if (table.schema[column] === 'blob') {
                row[column] = readBlob()
            } else if (table.schema[column] === 'wearable_slots') {
                row["slot_type_id"] = readInteger()
                row["coverage"] = row["slot_type_id"] === 1 || row["slot_type_id"] > 2 && row["slot_type_id"] <= 8 ? readInteger() : null
            } else if (Array.isArray(table.schema[column])) {
                if (table.schema[column].length === 2) {
                    if (table.schema[column][0] === 'nullcheck') {
                        if (readInteger() === 5) {
                            set_null = table.schema[column][1]
                        }
                    }
                }
            } else {
                console.log("unknown type " + table.schema[column])
                assert(false)
            }
        })

        if (insert !== null) {
            insert.run(...insertList.map(column => {
                if (table.schema[column] === 'text') {
                    return row[column]
                } else if (table.schema[column] === 'integer') {
                    return row[column]
                } else if (table.schema[column] === 'boolean') {
                    return row[column] && 1 || 0
                } else if (table.schema[column] === 'real') {
                    return row[column]
                } else if (table.schema[column] === 'long') {
                    return row[column]
                } else if (table.schema[column] === 'blob') {
                    return row[column] === null ? null : Buffer.from(row[column])
                } else {
                    console.log("unknown type " + table.schema[column])
                    assert(false)
                }
            }))
        }

        rows++
    }

    if (!table.no_end) {
        consume(0x65)
    }

    if (table.starts_with_count && !table.invalid_count) {
        console.log(count)
        assert(rows === count, `${rows} !== ${count}`)
    } else {
        console.log(rows)
    }
})

assert(hasNext() === false)

console.log(offset)

data = fs.readFileSync(process.argv[3]);

dict = []

offset = 0

let lasttuple = null
let stmt3 = null

const columnInsertCache = {}

while (hasNext() && peek() != 0x65) {
    consume(0x64)
    const tableName = readString()
    const namecolumn = readString()
    const id = readInteger()
    const namevalue = readString()

    let idcolumn = 'id'

    if (tableName === "hotkeys") {
        //db.exec(`CREATE TABLE IF NOT EXISTS hotkeys (id INTEGER NOT NULL PRIMARY KEY, key_primary TEXT, key_second TEXT, activation TEXT)`)
        idcolumn = "action_id"
    }

    if (tableName === 'festival_zones') {
        idcolumn = "zone_group_id"
    }

    if (tableName === 'tradegood_priceindices') {
        idcolumn = "stock"
    }

    if (tableName === 'options') {
        idcolumn = "option_item_type_id"
    }

    const curtuple = `${tableName}|${namecolumn}`
    if (curtuple !== lasttuple) {
        lasttuple = curtuple

        if (columnInsertCache[curtuple] === undefined) {
            try {
                db.exec(`alter table ${tableName} add column ${namecolumn} TEXT default null`)
            } catch (e) {
                if (e.message.startsWith("duplicate column name: ")) {
                    // ignore
                } else {
                    console.log(e)
                    process.exit(0)
                }
            }

            columnInsertCache[curtuple] = true
        }

        stmt3 = db.prepare(`INSERT INTO ${tableName} (${idcolumn}, ${namecolumn}) VALUES(?, ?) ON CONFLICT(${idcolumn}) DO UPDATE SET ${namecolumn}=?`);
    }

    if (stmt3 !== null) {
        stmt3.run(id, namevalue, namevalue);
    }
}

consume(0x65)

assert(hasNext() === false)

db.backup(process.argv[4])
  .then(() => {
    console.log('backup complete!');
  })
  .catch((err) => {
    console.log('backup failed:', err);
  })
  .finally(() => {
    db.close();
  });
