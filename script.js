

//     let name = prompt('Введите свое имя')
//     let year = +prompt( ' Введите нынешний год')
//     let age = +prompt(' Введите год рождения')


// function about( years, ages) {
    
//     let num = years - ages
//     return num
// }
// console.log( 'Вас зовут ' + name + ' Вам ' + about(year, age) + ' лет');


// let math = prompt( ' сколько примеров вы хотите ?')



function oper() {
        return Math.floor(Math.random() * 4 + 1)
}



if (oper() == 1) {

    oper() = '+'
    
} else if ( oper() == 2) {

    oper() = '*'
} else if ( oper() == 3){
    oper() = '*'
}else if ( oper() == 4) {
    oper() = '/'
}



console.log(oper());







// function solve( ) {

//     return Math.floor(Math.random() * 50 + 1)
// }


// for (let i = 0; i < math; i++) {
//     let first = solve()
//     let second = solve()
//     let answer = +prompt(first + ' + ' + second + ' = ? ')
//     let trueAnswer = first + second
//     console.log(answer == trueAnswer ? ' Ваш ответ верный : ' + answer :  ' Ваш ответ не верный ' + answer + ' Правильный ответ ' + trueAnswer ) 
// }

// alert(' Откройте панель разработчика чтобы увидеть результаты')