const Feed = require('../models/Feed');

exports.create = async (req, res) => {
    const { feedTxt } = req.body;
    try {
      let feed = await Feed.create({feed:feedTxt})
      res.status(200).json({
        message: "post uploaded succesfully"
    }
      )
    }
    catch (error) {
      console.log(error)
    }
  
  }

exports.readSingle = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
      let feed = await Feed.findOne({_id: id})
      res.status(200).json(
        feed
      )
    }
    catch (error) {
      console.log(error)
    }
  
  }