# rjs-api

Is a simple api for revolt bots in js

* Fast
* Simple
* Light
* Ready to Use

## Example

```js
import Api from 'rjs-api'

const api = Api("TOKEN_BOT")

api.channels["01FSMFSXJBYAAYSVCW9JGXXCJ0"].get().then(console.log)

api.users["@me"].get().then(console.log)
```