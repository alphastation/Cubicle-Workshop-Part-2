
const {
    about
} = require('../controllers/about');
const {
    catalog
} = require('../controllers/catalog');
const {
    getCreate,
    postCreate
} = require('../controllers/create');
const {
    getEdit,
    postEdit
} = require('../controllers/edit');
const {
    details
} = require('../controllers/details');
const {
    notFound
} = require('../controllers/notFound');

module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', getCreate);
    app.post('/create', postCreate);
    app.get('/edit/:id', getEdit)
    app.post('/edit/:id', postEdit);
    app.get('/notFound', notFound);
    app.all('*', notFound)


}