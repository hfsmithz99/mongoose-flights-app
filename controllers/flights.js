const FlightModel = require('../models/flights');

module.exports = {
    index,
    new: newFlight,
    create

}

async function index(req, res){
    try{
        const flightDocuments = await FlightModel.find({});
        console.log('flightDocuments', flightDocuments);
        res.render('flights/index', {flightDocs: flightDocuments});
    } catch(err){
        res.send(err)
    }
}

function newFlight(req, res){
    res.render('flights/new');
}

async function create(req, res){
    console.log(req.body, "<---- FORM CONTENTS HERE");

    try {
        const flightDoc = await FlightModel.create(req.body);

        console.log(flightDoc, "<---- flight created in DB");

        res.redirect("/flights");
    } catch(err){
        res.send(err);
    }
}