module.exports = app => {
    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Gabriel Hahn Schaeffer',
                email: 'gabriel_hahn@hotmailcom',
                id: 1
            }]
        });
    });

    app.get('/users/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Admin',
                email: 'gabriel_hahn@hotmailcom',
                id: 2
            }]
        });
    });
}