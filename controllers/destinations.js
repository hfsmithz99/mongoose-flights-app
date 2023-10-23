const FlightModel = require('../models/flights');

module.exports = {
    create
}

async function create(req, res){
    try{
        const flightDoc = await FlightModel.findById(req.params.id)
        console.log(flightDoc);
        console.log(req.body, '<----- contents of the form')

        flightDoc.destinations.push(req.body)

        await flightDoc.save();

        console.log(flightDoc);
        res.redirect(`/flights/${flightDoc._id}`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }

}