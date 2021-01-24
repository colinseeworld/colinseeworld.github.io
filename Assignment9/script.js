const john = {
    firstName: 'John',
    lastNam: 'Willams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    driverLicense: true,
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()} years old guy, and he has ${'driverLicense' ? 'a' : 'no'} driver's license.`;
    }
}

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friends is called ${john.friends[0]}.`)
console.log(john.getSummary())

const button = document.querySelectorAll(".btn")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        document.querySelector('.modalwindow').style.visibility = "block";
    });
}

