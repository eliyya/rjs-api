/**
 * Create new Revolt Apifor Bots
 * @param {string} token - Bot Token
 * @returns Api
 */
export function Api(token) {
    return createProxy('https://api.revolt.chat', token)
}
function createProxy(url, token) {
    return new Proxy(
        {},
        {
            get: (_, prop) => {
                if (!['get', 'post', 'patch', 'put'].includes(prop)) return createProxy(`${url}/${prop}`, token)
                if (prop === 'get')
                    return async ({ query = '', headers = {} } = {}) => {
                        if (query && typeof query === 'object') query = `?${new URLSearchParams(query)}`
                        if (query && !query.startsWith('?')) query = '?' + query
                        const req = await fetch(url + query, {
                            headers: { 'x-bot-token': token, 'content-type': 'aplication/json' },
                            ...headers
                        })
                        if (req.ok) return req.json()
                        return Promise.reject({
                            status: req.status,
                            statusText: req.statusText,
                            url: req.url,
                            method: 'GET'
                        })
                    }
                if (prop === 'post')
                    return async ({ query = '', headers = {}, body = '' } = {}) => {
                        if (query && typeof query === 'object') query = `?${new URLSearchParams(query)}`
                        try {
                            if (body && typeof body === 'object') body = JSON.stringify(body)
                        } catch (error) {
                            return Promise.reject({
                                status: 500,
                                statusText: String(error),
                                url: url,
                                method: 'POST'
                            })
                        }
                        if (query && !query.startsWith('?')) query = '?' + query
                        const req = await fetch(url + query, {
                            headers: { 'x-bot-token': token, 'content-type': 'aplication/json' },
                            ...headers,
                            body,
                            method: 'POST'
                        })
                        if (req.ok) return req.json()
                        return Promise.reject({
                            status: req.status,
                            statusText: req.statusText,
                            url: req.url,
                            method: 'POST'
                        })
                    }
                if (prop === 'patch')
                    return async ({ query = '', headers = {}, body = '' } = {}) => {
                        if (query && typeof query === 'object') query = `?${new URLSearchParams(query)}`
                        try {
                            if (body && typeof body === 'object') body = JSON.stringify(body)
                        } catch (error) {
                            return Promise.reject({
                                status: 500,
                                statusText: String(error),
                                url: url,
                                method: 'PATCH'
                            })
                        }
                        if (query && !query.startsWith('?')) query = '?' + query
                        const req = await fetch(url + query, {
                            headers: { 'x-bot-token': token, 'content-type': 'aplication/json' },
                            ...headers,
                            body,
                            method: 'PATCH'
                        })
                        if (req.ok) return req.json()
                        return Promise.reject({
                            status: req.status,
                            statusText: req.statusText,
                            url: req.url,
                            method: 'PATCH'
                        })
                    }
                if (prop === 'put')
                    return async ({ query = '', headers = {}, body = '' } = {}) => {
                        if (query && typeof query === 'object') query = `?${new URLSearchParams(query)}`
                        try {
                            if (body && typeof body === 'object') body = JSON.stringify(body)
                        } catch (error) {
                            return Promise.reject({
                                status: 500,
                                statusText: String(error),
                                url: url,
                                method: 'PUT'
                            })
                        }
                        if (query && !query.startsWith('?')) query = '?' + query
                        const req = await fetch(url + query, {
                            headers: { 'x-bot-token': token, 'content-type': 'aplication/json' },
                            ...headers,
                            body,
                            method: 'PUT'
                        })
                        if (req.ok) return req.json()
                        return Promise.reject({
                            status: req.status,
                            statusText: req.statusText,
                            url: req.url,
                            method: 'PUT'
                        })
                    }
            }
        }
    )
}

export default Api
