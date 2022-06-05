var express = require('express');
var router = express.Router();

exports.pwdValidation=(pwd)=>{
    if(pwd.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)){
      return true
    } else {
    return false
  }
}


exports.emailValidation = (email)=>{
  if (email!== ' ') {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    } else {
      return false;
    }
  }else {
    return -1;
  }
}


