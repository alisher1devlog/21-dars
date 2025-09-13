import { getRandom } from "./random.js";
import { Person } from "./person.js";
import { sleep } from "./sleep.js";

async function example() {
    console.log("Dastur boshlandi!");
    await sleep(getRandom());
    const person1 = new Person("John Doe", 2005);
    person1.getInfo();
    console.log(person1.age);
}

example()
