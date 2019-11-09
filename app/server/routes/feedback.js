const nodeMailer = require('nodemailer')

async function getForm(req, res) {
  const errors = []

  const addErrors = ((key, message) => {
    if (errors.length === 0) {
      errors.push({
        [key]: [message]
      })
    } else {
      let find = false
      errors.forEach(error => {
        if (error[key]) {
          error[key].push(message)
          find = true
        }
      })
      if (!find) {
        errors.push({
          [key]: [message]
        })
      }
    }
  })

  if (!req.body.name) {
    errors.push({
      name: ['Поле имя обязательно для заполнения']
    })
  } else if (req.body.name.length > 20) {
    addErrors('name', 'Поле имя не может содержать более 20 символов')
  }


  if (!req.body.email) {
    errors.push({
      email: ['Поле почты обязательно для заполнения']
    })
  } else if (req.body.email.length > 30) {
    addErrors('email', 'Поле почты не может содержать более 20 символов')
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)) {
    addErrors('email', 'Почта невалидна')
  }

  if (!req.body.message) {
    errors.push({
      message: ['Поле сообщения обязательно для заполнения']
    })
  } else if (req.body.message.length < 5) {
    addErrors('message', 'Напишите несколько слов')
  } else if (req.body.message.length > 100) {
    addErrors('message', 'Сообщение должно быть не более 100 символов')
  }

  if (errors.length > 0) {
    res.json({errors: errors})
  } else {
    let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
    let mailOptions = {
      to: process.env.EMAIL_USER,
      subject: 'Сообщение с сайта',
      html: `
        <html>
            <body>
                От: ${req.body.name}<br>Email: ${req.body.email}<br>Сообщение: ${req.body.message}
            </body>
        </html>
      `
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message %s sent: %s', info.messageId, info.response)
    })
    res.json({success: true})
  }
}

module.exports = {getForm}
