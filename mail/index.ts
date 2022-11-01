import {Client} from "./src/server/Client"

(async () => {
    const client = new Client();
    await client.init();
})();