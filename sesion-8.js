
function sinParametro(){
    return true
}
console.log(sinParametro())


function async5Seg() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('Hola soy una promesa');
        }, 5000);
    });
}

async function asyncResultado() {
    const result = await async5Seg();
    console.log(result);
}

asyncResultado();


function* generaPar(){
    let id = 1;
    while(true){
        id = id*2
        yield id 
    }
}

const gen = generaPar();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
