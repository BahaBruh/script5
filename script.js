

    let name = prompt('Введите свое имя')
    let year = +prompt( ' Введите нынешний год')
    let age = +prompt(' Введите год рождения')


function about( years, ages) {
    
    let num = years - ages
    return num
}
console.log( 'Вас зовут ' + name + ' Вам ' + about(year, age) + ' лет');


let math = prompt( ' сколько примеров вы хотите ?')



// function oper() {

//     return Math.floor(Math.random() * 5 + 1)
// }

// let operat = oper()


//     function sign () {
        
//         return (operat > 1 ? '+': '-' || operat > 3 ? '*': operat < 5 ? '/' )
//     }




    console.log( sign());




    function sign() {

        return Math.floor(Math.random() * 5 + 1) <= 2 ? '+' : '-' || Math.floor( Math.random() * 10 + 5) <= 7 ? '*' : '/' ;   
    }




// if (oper() == 1) {

//     oper() = '+'
    
// } else if ( oper() == 2) {

//     oper() = '*'
// } else if ( oper() == 3){
//     oper() = '*'
// }else if ( oper() == 4) {
//     oper() = '/'
// }



// console.log(oper());







function solve( ) {

    return Math.floor(Math.random() * 50 + 1)
}


for (let i = 0; i < math; i++) {
    let first = solve()
    let second = solve()
    let third = sign()
    let answer = +prompt(first + third + second + ' = ? ')
    let trueAnswer = first + second
    if ( first + second == answer || first - second == answer || first * second == answer || first / second == answer ) {

        console.log( ' Вы ответили верно : ' + answer);

    } else {
        console.log( ' Вы ответили не верно : ' + answer );
    }
}

alert(' Откройте панель разработчика чтобы увидеть результаты')