const upmon = require('upmon')
const mail = require('upmon-mail')
const sms = require('upmon-sms')
const graf = require('upmon-graf')

upmon().pipe(mail()).pipe(sms()).pipe(process.stdout)
