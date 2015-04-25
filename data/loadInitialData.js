/**
 * Created by Tommz on 20/04/15.
 */


var Promise = require('bluebird');
var mongoose = require('mongoose');




mongoose.connect('mongodb://127.0.0.1:27017/populo', function () {
  mongoose.connection.db.dropDatabase(function (err) {
    console.log('DB Connection established!');

    var Countries = require('../models/countries'),
      Communities = require('../models/communities'),
      Categories = require('../models/categories');


    var globalCommunity;
    var hr = new Countries({twoLetterCode: "hr", name: "Hrvatska"})

    hr.save().then(function(hr){
      globalCommunity = new Communities({name: "Global community"});
      return globalCommunity.save();


    }).then(function(globalCommunity){
      var hrCommunity = new Communities({name:"Croatian community", country: hr});
      return hrCommunity.save();


    }).then(function(hrCommunity){
      hr.community = hrCommunity;
      return hr.save();


    }).then(function(){
      var categoryEvent = new Categories({name: "Events", community: globalCommunity});
      var categoryMusic = new Categories({name: "Music", community: globalCommunity});
      var categorySmartPhones = new Categories({name: "SmartPhones", community: globalCommunity});
      var categoryApp = new Categories({name: "Applications", community: globalCommunity});

      return Promise.all([categoryEvent.save(), categoryMusic.save(),
        categorySmartPhones.save(), categoryApp.save()]);


    }).then(function(array){

      globalCommunity.categories = array;
      return globalCommunity.save();


    }).then(function(globalCommunity){
      console.log('done!');

    }, function(err){

      console.log(err);
    });
  });
});












