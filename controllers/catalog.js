// const storage = require('../models/storage')

module.exports = {

    catalog: async (req, res) => {
        // console.log(req.query)
        const cubes = await req.storage.getAll(req.query)
        // const cubes = await storage.getAll(req.query)
        // console.log(cubes)
        const ctx = {
            title: 'Cubicle catalog',
            cubes,
            search: req.query.search || '',
            from: req.query.from || '',
            to: req.query.to || ''
        }
        //ako sa undefined ще има ишу-мишу, затова се посигуряваме с ....или празен стринг
        res.render('index', ctx);

    }
}