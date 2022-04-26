import WebSocket from "ws"

function proccesQuery(query = '') {
    if (query && typeof query === 'object') return `?${new URLSearchParams(query)}`
    if (query && typeof query === 'string' && !query.startsWith('?')) return `?${query}`
    if (query && typeof query === 'string') return query
    return ''
}

/**
 * Create new Revolt Api for Bots
 */
export function Api(token) {
    return createProxy('https://api.revolt.chat', token)
}

function createProxy(url, token) {
    const defaultHeaders = {
        'x-bot-token': token,
        'content-type': 'application/json'
    }
    return new Proxy(
        {
            /**
             * Apply a GET to this route
             * @param {{query?:string;headers?:object}} getOptions 
             * @returns {Psomise<any>}
             */
            async get({ query = "", headers = {} } = {}){
                const res = await fetch(`${url}${proccesQuery(query)}`, {
                    headers: { ...defaultHeaders, ...headers }
                })
                if (res.ok) return res.json()
                else Promise.reject(new Error(res.statusText))
            },

            /**
             * Apply a POST to this route
             * @param {{query?:string;headers?:object;body?:string|object}} getOptions 
             * @returns {Psomise<any>}
             */
            async post({ query = "", headers = {}, body = "" } = {}){
                const res = await fetch(`${url}${proccesQuery(query)}`, {
                    headers: { ...defaultHeaders, ...headers },
                    method: 'POST',
                    body: typeof body !== 'string' ? JSON.stringify(body) : body
                })
                if (res.ok) return res.json()
                else Promise.reject(new Error(`Error ${res.status}: ${res.statusText}`))
            },

            /**
             * Apply a PATCH to this route
             * @param {{query?:string;headers?:object;body?:string|object}} getOptions 
             * @returns {Psomise<any>}
             */
            async patch({ query = "", headers = {}, body = "" } = {}){
                const res = await fetch(`${url}${proccesQuery(query)}`, {
                    headers: { ...defaultHeaders, ...headers },
                    method: 'PATCH',
                    body: typeof body !== 'string' ? JSON.stringify(body) : body
                })
                if (res.ok) return res.json()
                else Promise.reject(new Error(`Error ${res.status}: ${res.statusText}`))
            },

            /**
             * Apply a PUT to this route
             * @param {{query?:string;headers?:object;body?:string|object}} getOptions 
             * @returns {Psomise<any>}
             */
            async put({ query = "", headers = {}, body = "" } = {}){
                const res = await fetch(`${url}${proccesQuery(query)}`, {
                    headers: { ...defaultHeaders, ...headers },
                    method: 'PUT',
                    body: typeof body !== 'string' ? JSON.stringify(body) : body
                })
                if (res.ok) return res.json()
                else Promise.reject(new Error(`Error ${res.status}: ${res.statusText}`))
            },

            /**
             * Apply a DELETE to this route
             * @param {{query?:string;headers?:object;body?:string|object}} getOptions 
             * @returns {Psomise<any>}
             */
            async delete({ query = "", headers = {}, body = "" } = {}){
                const res = await fetch(`${url}${proccesQuery(query)}`, {
                    headers: { ...defaultHeaders, ...headers },
                    method: 'DELETE',
                    body: typeof body !== 'string' ? JSON.stringify(body) : body
                })
                if (res.ok) return res.json()
                else Promise.reject(new Error(`Error ${res.status}: ${res.statusText}`))
            }
        },
        {
            get: (obj, prop) => {
                if (!["get", "post", "patch", "put", "delete"].includes(prop))
                    return createProxy(`${url}/${prop}`, token)
                else return obj[prop]
            }
        }
    )
}

/**
 * Create a new WebSocket connection to the Revolt Api
 * @param {string} token - Bot Token
 * @returns {WebSocket} - the WebSocket connection ready to use
 */
export function WebSocketConnection(token) {
    try {
        const ws = new WebSocket("wss://ws.revolt.chat?format=json")
        ws.on("open", () => {
            setInterval(() => ws.ping(), 15_000)
            ws.send(
                JSON.stringify({
                    type: "Authenticate",
                    token: token,
                })
            )
        })
        return ws
    } catch (error) {
        throw error
    }
}

export default Api