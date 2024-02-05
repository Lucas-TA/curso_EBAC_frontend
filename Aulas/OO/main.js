const carJoao = {
    model: "Fiesta",
    manufacturer: "Ford",
    yearModel: "2020",
    speedUp: function() {
        console.log("Vrum!!")
    }
}
const carMaria = {
    model: "Ka",
    manufacturer: "Ford",
    yearModel: "2021",
    speedUp: function() {
        console.log("Vrum!!")
    }
}

function Carro(model, manufacturer, yearModel) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearModel = yearModel;
    this.speedUp = function() {
        console.log('vruuum!!')
    }
}

const carJoao2 = new Carro("Fiesta", "Ford", 2020);
const carMaria2 = new Carro("Ka", "Ford", 2021);

console.log(carJoao2);
console.log(carMaria2);