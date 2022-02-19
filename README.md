# rjs-api

Is a simple api for revolt bots in JavaScript

* Fast
* Simple
* Light

> **Note:** requires ES Modules, Node 17.5.0 or superior and the flag `--experimental-fetch`

## Example

```js
import Api from 'rjs-api'

const api = Api("TOKEN_BOT")

api.channels["01FSMFSXJBYAAYSVCW9JGXXCJ0"].get().then(console.log)

api.users["@me"].get().then(console.log)
```

You can explore all api routes as a property and use the `get()` method on any endpoint

***

### get(getOptions): Promise\<object>

Apply a `GET` to the generated route

**Params:**
* **getOptions:** Object
    * **query:** `Object` or `String` - Properties passed in the object are added in the query.
    * **headers:** Object - Extra headers can be added and override the default ones.
* **Returns:** A `Promise` with the information in a `JSON` received from the API. In case of an error receives an `Object` with error information.