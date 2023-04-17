
const path = require('path');

const express = require('express');
exports.contactuscontroller=(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
  }