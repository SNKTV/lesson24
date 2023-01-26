// Лекція 24

// Завдання 1-2-3
class User {
    #name;
    #password
    constructor(name, login, age) {
        this.#name = name;
        this.login = login;
        this.age = age;
        this.#password = '123'

    }
    getName(isAdmin) {
        return isAdmin ? this.#name || this.login : 'Permission denied';
    }

    changeName(createName, password) {

        return password === this.#password ? `Name change from ${this.#name} to ${this.#name = createName}` : 'Permission denied'; 
    }

}

let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.changeName('Bill', '123'));

// Завдання 4

class Admin extends User {
    #isAdmin;
    #name
    constructor(name, login, age) {
        super(name, login, age);
        this.#name = name;
        this.#isAdmin = true;
    }
    getUserName(user) {
        console.log(user.getName(this.#isAdmin));
    }


}

const admin = new Admin('Max', 'Max_1', 15);
admin.getUserName(user1);

// Завданян 5

class User1 {
    #phone
    constructor(name, phone) {
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmin) {
        let arr = this.#phone.split('');
        for (let i = 4; i < arr.length - 3; i++) {
            arr[i] = '*';
        }
        isAdmin ? console.log(this.#phone) : console.log(arr.join(''));
    }
}

const user3 = new User1('Mike', '067-888-88-99');
const user4 = new User1('Tom', '099-888-88-99');

user3.getPhone(false);
user4.getPhone(true);