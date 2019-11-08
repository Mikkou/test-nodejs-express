const mongoose = require('mongoose')
const Schema = mongoose.Schema

let StaticSchema = new Schema(
  {
    alias: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
)

StaticSchema.pre('save', function (next) {
  const user = this
  if (!user.createdAt) {
    user.createdAt = new Date()
  }
  next()
})

module.exports = mongoose.model('static', StaticSchema)
