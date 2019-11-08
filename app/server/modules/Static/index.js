const StaticModel = require('./model')

module.exports = class Static {
  static async set (req, res) {
    const result = await StaticModel.find({ alias: req.body.alias })
    if (result.length > 0) {
      StaticModel.findById({ _id: result[0]._id }, (err, item) => {
        if (err) res.send(err)
        Object.assign(item, req.body).save((err) => {
          if (err) res.send(err)
          res.json({ success: true })
        })
      })
    } else {
      const newItem = new StaticModel(req.body)
      newItem.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.status(200).json({ success: true })
        }
      })
    }
  }

  static async get (req, res) {
    const result = await StaticModel.find({ alias: req.query.alias })
    if (result.length > 0) {
      res.json(result[0])
    } else {
      const newItem = new StaticModel(req.body)
      newItem.save(err => {
        res.status(200).json({ error: 'Item doesn\'t exist' })
      })
    }
  }
}
