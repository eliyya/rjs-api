import Api from "./index.js";

const api = Api(process.env.TOKEN)

api.channels['01FSMFSXJBYAAYSVCW9JGXXCJ0'].messages.post({
    body: JSON.stringify({
        content: 'hi?'
    })
}).then(console.log).catch(console.log)

console.log(api.channel['01FSMFSXJBYAAYSVCW9JGXXCJ0'].messages.post)
