const fs = require('fs/promises')
const uniqid = require('uniqid');
//load and parse data file
//provide ability to:
// - read all entries and particular entry by ID
//- add new entry
// get matching entries by a search criteria

let data = {};

async function getAll(query) {
   let cubes = Object
   .entries(data)
   .map(([id, values]) => Object.assign({}, {
       id
   }, values))
   //filter after search
   if (query.search) {
       cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()))
   }
   if (query.from) {
    cubes = cubes.filter(c => c.difficulty >= Number(query.from))
}
if (query.to) {
    cubes = cubes.filter(c => c.difficulty <= Number(query.to))
}

    return cubes;
}

async function getById(id) {
    return data[id];
}

async function create(entry) {
    const id = uniqid();
    // const id = "id" + Math.random().toString(16).slice(2)
    data[id] = entry;
    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 2))
        console.log('new entriy in db is added')
    } catch (error) {
        console.error('Error writing in the database!!!')
    }

}
async function init() {

    try {
        data = JSON.parse(await fs.readFile('./models/data.json')); //ot4itame path ot indexa
        // console.log(`>>>>>>>>${Object.entries(data)`);
    
    } catch (error) {
        console.error('Error reading database!!!')
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create
        }
        next()
    }
}
module.exports = {
    init,
    getAll,
    getById,
    create
}