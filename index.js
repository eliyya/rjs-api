/**
 * Create new Revolt Apifor Bots
 * @param {string} token - Bot Token 
 * @returns Api
 */
export function Api(token) { return createProxy("https://api.revolt.chat", token) }
function createProxy(url, token) {
    return new Proxy({}, {
            get: (_, prop) => {
                if (!["get"].includes(prop)) return createProxy(`${url}/${prop}`, token)
                if (prop === "get")
                    return async ({query = '', headers = {}} = {}) => {
                        if (query && typeof query === 'object') query = `?${new URLSearchParams(query)}`
                        if (query && !query.startsWith('?')) query = '?'+query
                        const req = await fetch(url+query, { headers: { "x-bot-token": token, 'content-type': 'aplication/json' }, ...headers })
                        if (req.ok) return req.json()
                        return Promise.reject({
                            status: req.status,
                            statusText: req.statusText,
                            url: req.url,
                            method: 'GET'
                        })
                    };
            },
        },
    );
}

export default Api