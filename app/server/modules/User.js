require('dotenv').config()

module.exports = class User {

  static login (req, res) {
    const response = res
    const {
      ADMIN_LOGIN: login,
      ADMIN_PASSWORD: password,
      TOKEN_SECRET: token
    } = process.env

    if (req.body.password !== password || req.body.login !== login) {
      response.json({ error: 'Неверный логин или пароль.' })
    } else {
      // TODO: make this token dinamicly
      response.status(200).json({ success: true, token: token })
    }
  }

  static checkAuthorization (req, res) {
    if (req.body.token === process.env.TOKEN_SECRET) {
      res.status(200).json({ success: true })
    } else {
      res.json({ error: 'Не авторизованны.' })
    }
  }
}
