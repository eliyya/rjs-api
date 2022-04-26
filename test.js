import { Api, WebSocketConnection } from './index.js'

const api = Api('jC6T2X2wYs70W82wnT73hN-hc12sB8R_q0ngKFaGb9RyL3SdIbKDMasZNare_y3p')

const userbot = await api.users['@me'].get()
//POST method
api.channels['01FSMFSXJBYAAYSVCW9JGXXCJ0'].messages.post({
    body: { 
        content: 'Hi, Im ' + userbot.username + ', Im ready'
     }
})

const ws = WebSocketConnection('jC6T2X2wYs70W82wnT73hN-hc12sB8R_q0ngKFaGb9RyL3SdIbKDMasZNare_y3p')

ws.on('message', (data) => {
    const event = JSON.parse(data.toString())

    if (event.type !== 'Message') return

    if (event.content.startsWith('!ping'))
    
        return api.channels[event.channel].messages.post({
            body: JSON.stringify({
                content: 'pong!'
            })
        })
})
