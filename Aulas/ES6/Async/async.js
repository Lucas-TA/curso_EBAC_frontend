//Promise
const heavyFunctionPromise = new Promise((resolve, reject) => {
    try {
        let exec = 0;
        for( let i = 0; i < 1000000000; i++ ) {
            exec++
        }
        resolve(exec)
    } catch(e) {
        reject('Moio')
    }
})

// console.log('inicio');
// heavyFunctionPromise.then(res => console.log(res)).catch(erro => console.log(erro))

// console.log('fim')

//async await
const promiseWithParameters = (login, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

async function mainExec() {
    console.log('inicio')
        // await heavyFunctionPromise.then(res => console.log(res)).catch(erro => console.log(erro))
        promiseWithParameters('lucas@gmail.com', 123456).then(res => console.log(res))
        try {
            const res = await heavyFunctionPromise;
            console.log(res)
        } catch(erro) {
            console.log(erro)
        }
    console.log('fim')
}
mainExec()

