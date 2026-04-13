const Course = require("../models/course");

exports.index = function(req, res) {
    Course.findAll({ raw: true })
        .then(data => {
            res.render("index.hbs", { courses: data });
        })
        .catch(err => console.log(err));
};