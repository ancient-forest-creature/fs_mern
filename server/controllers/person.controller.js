const Person = require('../models/person.model');

module.exports = {


    findAllPeople: (req, res) => {
        Person.find({}) //Will find all documents in a collection
            .then((allPersons) => {
                console.log(allPersons)
                res.json(allPersons)
            })
            .catch((err) => {
                console.log("findAllPersons has failed!")
                console.log(err)
                res.json(err)
            })
    },

    createNewPerson: (req, res) => {
        Person.create(req.body) //creates a new doc based on info passed through the client request's body (like a form)
            .then((newPerson) => {
                console.log(newPerson)
                res.json(newPerson)
            })
            .catch((err) => {
                console.log(err)
                console.log("createNewPerson has failed!")
                //We set a response status of 400 to 
                //display our err, which is the result of the rejection of our promise.

                //A 400 status means our client is talking 
                //to our server just fine, but the client isn't sending good info.

                //This is how we will eventually display 
                //our validations from the server in react!

                //A 404 status error means the client's 
                //requesting data that doesn't exist 
                //Often due to a typo on the endpoint of your request uri

                //On the flip-side, a status of 200 means we are looking good!
                res.status(400).json(err)
            })
    },


    findOnePerson: (req, res) => {
        //We use the paramater's (params) or the client's request to search for a
        //specific document by the field (here _id) specified
        Person.findOne({ _id: req.params.id }) //the params id MUST MATCH how we write it in our routes!!!
            .then((onePerson) => {
                console.log(onePerson)
                res.json(onePerson)
            })
            .catch((err) => {
                console.log(err)
                console.log("findOnePerson has failed!")
                res.json(err)
            })
    },


    //Syntax is near-idential to our findOne. 
    deleteOnePerson: (req, res) => {
        Person.deleteOne({ _id: req.params.id })
            .then((deletedPerson) => {
                console.log(deletedPerson)
                res.json(deletedPerson)
            })
            .catch((err) => {
                console.log(err)
                console.log("deleteOnePerson has failed!")
                res.json(err)
            })
    },


    updatePerson: (req, res) => {
        //This Mongoose query requires both a parameter AND body from the request!
        Person.findOneAndUpdate({ _id: req.params.id },
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            { new: true, runValidators: true }
        )
            .then((updatedPerson) => {
                console.log(updatedPerson)
                res.json(updatedPerson)
            })
            .catch((err) => {
                console.log(err)
                console.log("updatePerson has failed!")
                res.status(400).json(err)  //See above (explained in create)
            })

    }




    //ALTERNATIVE WAY TO WRITE IT WHICH IS SHOWN IN SOME PLACES ON IN THE PLATFORM.
    //THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
    //I THINK THE WAY ABOVE IS EASIER, BUT THEY ARE ULTIMATELY THE SAME (NO CHANGE TO ROUTES SYNTAX), SO DO WHAT FEELS GOOD!


    // module.exports.findAllPersons = (req, res) => {
    // Person.find({})
    //         .then(allPersons => res.json(allPersons))
    //         .catch(err => res.json({ message: 'Something went wrong', error: err }));
    // },

    // module.exports.findOnePerson = (req, res) =>{
    //     Person.findOne({_id: req.params.id})
    //         .then((onePerson)=>{
    //             console.log(onePerson);
    //             res.json(onePerson)
    //         })
    //         .catch((err)=>{
    //             console.log("Find one Person failed");
    //             res.json({ message: 'Something went wrong in findOnePerson', error: err });
    //         })
    // }

}

// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//        message: "Hello World"
//     });
// }

