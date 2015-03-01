var User = require('./models/user.js');
var Team = require('./models/team.js');

module.exports = function(router) {

    router.route('/users')
    .post(function(req, res) {
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        user.email = req.body.email;
        user.save(function(err) {
            if(err) {
                res.send(err);
            } else {
                res.json(user);
            }
        });
    });
};