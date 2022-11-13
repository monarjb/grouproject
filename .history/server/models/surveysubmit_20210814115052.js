//  File Name : surveysubmit.js
//  COMP228 - Web Application Developmnet
//  Summer 2021 Group 6
//  Mighty Bunch

//  Developers: 
//  Sarabun Tohura - 300685525
//  Yerim Cho - 301143325
//  Mohammed Husain - 301149144
//  Mostafa Asaad - 301173762
//  Chaehyun Lee - 301084271
//  Viktoriia Romaniuk - 301079072

//  Web App Name : Migthy Survey
//  Description : Users can create new survey. 
//  There are two types of surveys, True or False / Scale.
//  Only logged-in users can answer the survey,
//  and only the creator of survey can edit / delte the survey. 

const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');

let surveySubmitModel = mongoose.Schema({
    surveyId:String,
    answer: Array 
},
{
    collection: "surveysubmit1"
});



module.exports = mongoose.model('SurveySubmit', surveySubmitModel);
