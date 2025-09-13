export class Person{
    constructor(fullName,birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.age = 2025 - this.birthYear;
    }

    getInfo(){
        console.log(`Full Name: ${this.fullName}, Age: ${this.age}`);
    }
}


