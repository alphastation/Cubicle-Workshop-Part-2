module.exports = {

    notFound (req, res) {

        // console.log('napisi')
        res.render('404', {title: 'Page Not Found'});

    }
}