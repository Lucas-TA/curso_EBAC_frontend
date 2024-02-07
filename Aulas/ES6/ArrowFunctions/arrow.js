const myFunction = () => "Say Hello";

console.log(myFunction())

//como retornar um objeto com arrow function
const returnObject = () => (

    {
        model: 'Ka',
        manufacturer:'Ford'
    }
)
console.log(returnObject())

const Car = {
    speedNow: 40,
    speedUp: function() {
        this.SpeedNow += 10;
    },
    SpeedDown: () => {
        this.speedNow -= 10;
    }
}