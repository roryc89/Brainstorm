'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  name: {
    type: String
  },
  room: {
    type: Schema.ObjectId,
    ref: 'Room'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  ownerName: {
    type: String,
  }
});

module.exports = mongoose.model('Idea', IdeaSchema);
