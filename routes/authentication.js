require("dotenv").config();
const express = require('express');
const router = express.Router();
var async = require('async');
const { db, auth }  = require('../config.js');


router.get('/signup', function(req, res, next){

  auth.onAuthStateChanged(function(user) {
    if (user) {
      user.isEmailVerified();
    } else {
      console.log('is signed out')
    }
  });

  auth.createUserWithEmailAndPassword("anasasousasilva@gmail.com", "1234567")
  .then(function(authentication) {

    auth.signOut().then(function () {
      console.log('worked');
    })

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Err: ", errorMessage);
    // ...
  })
  
});

module.exports = router;