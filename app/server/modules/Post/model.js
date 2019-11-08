const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imagePath: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
)

PostSchema.pre('save', function (next) {
  const post = this
  if (!post.createdAt) {
    post.createdAt = new Date()
  }
  next()
})

module.exports = mongoose.model('posts', PostSchema)
