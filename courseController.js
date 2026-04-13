const Course = require("../models/course");

exports.create = function(req, res) {
    res.render("create.hbs");
};

exports.postCreate = function(req, res) {
    if (!req.body) return res.sendStatus(400);

    const { title, instructor, duration } = req.body;
    Course.create({ title: title, instructor: instructor, duration: duration })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err));
};

exports.edit = function(req, res) {
    const courseId = req.params.id;
    Course.findByPk(courseId, { raw: true })
        .then(data => {
            res.render("edit.hbs", { course: data });
        })
        .catch(err => console.log(err));
};

exports.postEdit = function(req, res) {
    if (!req.body) return res.sendStatus(400);

    const { id, title, instructor, duration } = req.body;
    Course.update(
        { title: title, instructor: instructor, duration: duration },
        { where: { id: id } }
    )
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
};

exports.delete = function(req, res) {
    const courseId = req.params.id;
    Course.destroy({ where: { id: courseId } })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err));
};