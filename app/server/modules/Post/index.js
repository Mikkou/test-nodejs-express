const PostModel = require('./model')
const fs = require('fs')
const token = process.env.TOKEN_SECRET

module.exports = class Post {

  static imageSizeLimitKb = 400

  static async create (req, res) {
    if (token !== req.header('Authorization')) {
      res.json({ error: 'Вы не администратор.' })
    } else {
      const { title, description } = req.body
      if (!title || !description || !req.file) {
        res.json({ error: 'Поля title, description, image обязательны' })
      } else {
        if (req.file.size > Post.imageSizeLimitKb * 1000) {
          res.json({ error: 'Максимальный размер файла 400кб' })
        } else {
          const imagePath = Post.getFilePath(req.file.path)
          const newPost = new PostModel({ ...req.body, imagePath })
          await newPost.save().catch(err => res.send(err))
          res.json({ success: true })
        }
      }
    }
  }

  static async update (req, res) {
    if (token !== req.header('Authorization')) {
      res.json({ error: 'Вы не администратор.' })
    } else {

      const { title, description, _id } = req.body
      if (!title || !description || !_id || !req.file) {
        res.json({ error: 'Поля title, description, _id, image обязательны' })
      } else {
        if (req.file.size > Post.imageSizeLimitKb * 1000) {
          res.json({ error: 'Максимальный размер файла 400кб' })
        } else {
          const result = await PostModel.find({ _id: req.body._id })
          if (result.length > 0) {

            const post = result[0]

            const downloadedFileName = req.file.originalname.split('.')
              .splice(0,req.file.originalname.split('.').length - 1)
              .join('.')

            const fileNameFromDb = post.imagePath.replace('/uploads/', '')
              .split('-')
              .splice(0,post.imagePath.replace('/uploads/', '').split('-').length - 1)
              .join('-')

            if (downloadedFileName === fileNameFromDb) {
              Post.deleteFile(req.file.path.replace('static/', '/'))
              req.body['imagePath'] = post.imagePath
              Object.assign(post, req.body).save((err) => {
                if (err) res.send(err)
                res.json({ success: true })
              })
            } else {
              Post.deleteFile(post.imagePath)
              req.body['imagePath'] = Post.getFilePath(req.file.path)
              Object.assign(post, req.body).save((err) => {
                if (err) res.send(err)
                res.json({ success: true })
              })
            }
          } else {
            res.send({ error: 'Post doesn\'t exist by this id' })
          }
        }
      }
    }
  }

  static async delete (req, res) {
    if (token !== req.header('Authorization')) {
      res.json({ error: 'Вы не администратор.' })
    } else {
      const post = await PostModel.find({ _id: req.params.id })
        .catch(() => res.json({ error: 'This post doesn\'t exist' }))
      if (post.length > 0) {
        const { _id, imagePath } = post[0]
        Post.deleteFile(imagePath)
        PostModel.remove({ _id }, (err, result) => {
          res.json({ success: true })
        })
      }
    }
  }

  static async getOne (req, res) {
    const post = await PostModel.find({ _id: req.params.id })
      .catch(() => res.json({ error: 'This post doesn\'t exist' }))
    if (post.length > 0) {
      res.json(post[0])
    }
  }

  static async getAll (req, res) {
    const posts = await PostModel.find()
      .catch(err => res.json({ error: err }))
    res.json(posts)
  }

  static deleteFile (path) {
    fs.unlinkSync(process.cwd() + '/static' + path)
  }

  static getFilePath (name) {
    return name.replace('static/', '/')
  }

  static async createdComment (req, res) {
    const result = await PostModel.find({ _id: req.body.postId })
    if (result.length > 0) {
      const post = result[0]
      const body = req.body
      delete body.postId
      body['ip'] = req.headers['x-forwarded-for'] || req.connection.remoteAddress
      post.comments.push(body)
      post.save((err) => {
        if (err) res.send(err)
        res.json({ success: true })
      })
    } else {
      res.json({ error: 'This post doesn\'t exist' })
    }
  }
}
