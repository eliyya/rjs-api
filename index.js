export function Api(token) { return createProxy("https://api.revolt.chat", token) }
function createProxy(url, token) {
    return new Proxy({}, {
            get: (_, prop) => {
                if (!["get"].includes(prop)) return createProxy(`${url}/${prop}`, token);
                if (prop === "get")
                    return async () => {
                        const req = await fetch(url, { headers: { "x-bot-token": token } });
                        const res = await req.json();
                        return res;
                    };
            },
        },
    );
}

export default Api