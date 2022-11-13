const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');

// create a model class

let answerModel = mongoose.Schema({
    surveyid: ObjectId,
    howistheweathertoday: String,
    howismovietheaterpopcornmade: String,
    howisthesubject: String,
    howistheprojectgoing: String,
    howwastheTest: String
},
{
    collection: "answers"
});

module.exports = mongoose.model('Answer', answerModel);

