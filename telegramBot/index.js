const {Telegraf} = require('telegraf');
const dotenv = require('dotenv').config()
const pool = require('./db')
const bot = new Telegraf(process.env.BOT_TOKEN)
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


bot.command('what', ctx =>{
    if(ctx.from.id === 503692935){
        async function getData(){
            const data = await pool.query(`select * from appeals`)
            for(let i = 0; i < data.rows.length; i++){
                // console.log(data.rows[i])
                bot.telegram.sendMessage(ctx.chat.id, `${data.rows[i].name} ${data.rows[i].phone} ${data.rows[i].content}`, {})
            }
            console.log(ctx.from.id)
        }
        getData()
    }
    else{
        bot.telegram.sendMessage(ctx.chat.id, 'You are not My Owner')
    }
})

bot.command('test', ctx=>{

    bot.telegram.sendMessage(503692935, `asdasd ${ctx.chat.id}`)
})

const addUser = async (email, password) => {
    const data = await pool.query(`INSERT INTO users (email, password) VALUES (${email}, ${password}) `)
}

bot.command('register', ctx => {
    console.log(ctx)
    bot.telegram.sendMessage(503692935, `asdasd ${ctx.chat.id}`)
})


bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.launch();
