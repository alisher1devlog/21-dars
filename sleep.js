import { getRandom } from "./random.js";
import { Person } from "./person.js";

export function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

