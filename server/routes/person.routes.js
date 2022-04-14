const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    // app.get('/api', PersonController.index);
    app.get("/api/person", PersonController.findAllPeople)
    //if data is being sent to my server to create a new document, we use a POST HTTP Verb
    // IMPORTANT: the endpoints can be the same as long as they have differing HTTP Verbs
    app.post("/api/person", PersonController.createNewPerson)
    //Always put the ones with params after the ones that do not have them.
    //The parameter (params) id, as defined in the controller MUST MATCH
        //what we defined it as in the controller!
    app.get("/api/person/:id", PersonController.findOnePerson)
    app.delete("/api/person/:id", PersonController.deleteOnePerson)
    app.put("/api/person/:id", PersonController.updatePerson)
}

