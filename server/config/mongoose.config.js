const mongoose = require('mongoose');

const personDb = "personDb"

mongoose.connect(`mongodb://localhost/${personDb}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${personDb}`))
    .catch(err => console.log(`Something went wrong when connecting to ${personDb} `, err));

// in a class example, there are { } around the console.log function. I didn't need them previously, but if there are issues, it's worth trying