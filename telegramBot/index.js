const {Telegraf} = require('telegraf');
const dotenv = require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const API = process.env.API;
const id = process.env.OWNER_ID



console.log('BOT STARTED')

bot.start((ctx) => {
    if(ctx.from.id ===503692935){
        ctx.reply('Privet')
    }
    else{
        ctx.reply('NOPE')
    }
})



const addUser =  (email, password) => {

    fetch(`${API}/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            email,
            password
        })
    })

}

bot.command('register', ctx => {
    let data;
    ctx.reply('Введите email и пароль для регистрации через пробел')
    
    bot.on('text', ctx => {
        data = ctx.message.text
        let a = data.split(' ')
        addUser(a[0], a[1])
    })
    
    // console.log(email)
})




bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
