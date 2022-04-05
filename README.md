# rjs-api

Is a simple api for revolt bots in JavaScript

-   Fast
-   Simple
-   Light

> **Note:** requires ES Modules, Node 17.5.0 or superior and the flag `--experimental-fetch`

## Example

```js
// Import the API
import Api from "rjs-api"
//Create Api object
const api = Api("TOKEN_BOT")
//GET method
api.users["@me"].get().then(console.log).catch(console.log)
//POST method
api.channels["01FSMFSXJBYAAYSVCW9JGXXCJ0"].messages
    .post({ body: { content: "hi" } })
    .then(console.log)
    .catch(console.log)
```

You can explore all api routes as a property and use the `get()` or `post()` method on any endpoint

---

### get(getOptions): Promise\<object>

Apply a `GET` to the generated route

**Params:**

-   **getOptions:** Object
    -   **query:** `Object` or `String` - Properties passed in the object are added in the query.
    -   **headers:** Object - Extra headers can be added and override the default ones.
-   **Returns:** A `Promise` with the information in a `JSON` received from the API. In case of an error receives an `Object` with error information.

### post(postOptions): Promise\<object>

Apply a `POST` to the generated route

**Params:**

-   **postOptions:** Object
    -   **body:** `Object` or `String` - Data to send in the post
    -   **query:** `Object` or `String` - Properties passed in the object are added in the query.
    -   **headers:** Object - Extra headers can be added and override the default ones.
-   **Returns:** A `Promise` with the information in a `JSON` received from the API. In case of an error receives an `Object` with error information.

### patch(patchOptions): Promise\<object>

Apply a `PATCH` to the generated route

**Params:**

-   **patchOptions:** Object
    -   **body:** `Object` or `String` - Data to send in the patch
    -   **query:** `Object` or `String` - Properties passed in the object are added in the query.
    -   **headers:** Object - Extra headers can be added and override the default ones.
-   **Returns:** A `Promise` with the information in a `JSON` received from the API. In case of an error receives an `Object` with error information.

### put(putOptions): Promise\<object>

Apply a `PUT` to the generated route

**Params:**

-   **putOptions:** Object
    -   **body:** `Object` or `String` - Data to send in the put
    -   **query:** `Object` or `String` - Properties passed in the object are added in the query.
    -   **headers:** Object - Extra headers can be added and override the default ones.
-   **Returns:** A `Promise` with the information in a `JSON` received from the API. In case of an error receives an `Object` with error information.