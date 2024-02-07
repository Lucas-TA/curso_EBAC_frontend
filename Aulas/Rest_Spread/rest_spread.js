//rest operator
function sumWithRest(...numbers) {
    const sum = numbers.reduce( (total, numberAtual) => {
        total += numberAtual
        return total
    }, 0)
    return sum
}
console.log(sumWithRest(10, 20, 30, 40))

//spread operator
const numbers = [1, 2, 3, 4];
console.log(...numbers)

const soccerTeamsSp = ['Santos', 'Palmeiras', 'Corinthians', 'São Paulo'];
const soccerTeamsRj = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];
const soccerTeams = [...soccerTeamsSp, ...soccerTeamsRj];

console.log(soccerTeams)

//const soccerTeams = soccerTeamsSp.concat(soccerTeamsRj);

const carJulia = {
    model: 'gol',
    branch: 'vw',
    motor: 1.6
}

const carAna = {
    ...carJulia,
    motor:2.0
}
console.log(carJulia);
console.log(carAna);

//destructure
const { motor: motorAna } = carAna;
const { motor: motorJulia } = carAna;

const [item1, item2, item3, ...outrosTimes] = soccerTeams;
console.log(item1, item2, item3);
console.log(outrosTimes)
