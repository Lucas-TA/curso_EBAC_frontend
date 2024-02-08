function calcArea(base: number, height: number):number {
    return base * height
}
const calcArea2 = (base: number, height: number): number => base * height;

function sum(...numbers: number[]): void {
    console.log(numbers)
}
function test(): string | number {
    if (10 > 5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}

const testResult = test()