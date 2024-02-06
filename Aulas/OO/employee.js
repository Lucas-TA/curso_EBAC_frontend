function Person(name) {
    this.name = name;
    this.sayHi = function() {
        console.log(this.name + " Hi!")
    }
}

function Employee(name, role, sallary) {
    this.role = role;
    let _sallary = sallary;

    //getters
    this.getSallary = function() {
        return _sallary
    }

    //setters
    this.setSallary = function(value) {
        if (typeof value === 'number') {
            _sallary = value
        }
    }

    this.payRaise = function() {
        const newSallary = _sallary * 1.1;
        _sallary = newSallary;
    }

    Person.call(this, name);
}

function Trainee(name) {
    Employee.call(this, name, "Trainee", 2000);
    this.payRaise = function() {
        const newSallary = this.getSallary() * 1.07;
        this.setSallary(newSallary);
    }
}

const employee1 = new Employee("Maria", "Front-End Developer", 5000);
const employee2 = new Trainee("Pedro");
employee1.sayHi();

employee1.payRaise();
console.log(employee1.getSallary())
employee2.payRaise();
console.log(employee2.getSallary())