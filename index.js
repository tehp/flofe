var Botkit = require('botkit')
var Witbot = require('witbot')

var slackToken = process.env.SLACK_TOKEN
var witToken = process.env.WIT_TOKEN
var openWeatherApiKey = process.env.OPENWEATHER_KEY

var controller = Botkit.slackbot({
  debug: false
})

controller.spawn({
  token: slackToken
}).startRTM(function (err, bot, payload) {
  if (err) {
    throw new Error('Error connecting to slack: ', err)
  }
  console.log('Connected to slack')
})

var witbot = Witbot(witToken)

controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  witbot.process(message.text, bot, message)
})




witbot.hears('hello', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'Hello to you as well!')
})

witbot.hears('marc_gay', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'Marc is so gay...')
})

witbot.hears('status', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'FLOFE BOT STATUS: Active. Power level: Over 9000. Target: http://github.com/tehp/flofe')
})

witbot.hears('fuck_off', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'Fuck you too, cock sucker.')
})

witbot.hears('love', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'I love you too! :heart_decoration:')
})
