const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  feed: {
    type: String,
    required: true,
  }
}, {timestamps: true});

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = Feed;