module.exports = {

    getCreate: (req, res) => {


        res.render('create', {
            title: 'Create Cube'
        });

    },
    postCreate: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: Number(req.body.difficulty)
        }
        // console.log(req.body);
        await req.storage.create(cube);
        res.redirect('/');
    }
}