module.exports = {

    catalog: async (req, res) => {
        console.log(req.query)
        const cubes = await req.storage.getAll(req.query)
        // console.log(cubes)
        const ctx = {
            title: 'Cubicle catalog',
            cubes
        }
        res.render('index', ctx);

    }
}