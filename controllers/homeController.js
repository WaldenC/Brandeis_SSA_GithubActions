exports.respondForHomePage = (req, res) => {
    res.render("index");
};

exports.respondForAbout = (req, res) => {
    res.render("about");
};

exports.respondForContact = (req, res) => {
    res.render("contact");
};

exports.respondForEvents = (req, res) => {
    res.render("events");
};

exports.respondForJobs = (req, res) => {
    res.render("jobs");
}
