function Person(name) {
    this.name = name; 
}

function Employee(name, role, sallary) { // Objeto( atri, butos )
    this.role = role;

    let _sallary = sallary;


    //getter
    this.getSallary = function() { //método
        return _sallary
    }

    //setter
    this.setSallary = function(value) {
        if (typeof value === 'number') {
            _sallary = value
        }
    }

    this.annualPayRaise = function() {
        const newSallary = _sallary * 1.1;
        _sallary = newSallary;
    }

    Person.call(this, name) //herança
}


const employee1 = new Employee("Maria", "Dev Backend", 5400);

//employee1.annualPayRaise();
employee1.setSallary(8000); //
console.log(employee1.getSallary())