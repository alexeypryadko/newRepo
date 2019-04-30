function mathOperation ( arg1, arg2, operation ) { 
    switch (operation) { 
        case '+': 
            return addition ( arg1, arg2 ); 
        case '-': 
            return subtraction ( arg1, arg2 ); 
        case '/': 
            return division ( arg1, arg2 ); 
        case '*': 
            return multiplication ( arg1, arg2 ); 
        default: 
            alert('Произошла ошибка'); 
    } 
} 

function addition ( a, b ) { //Сложение 
    return a + b;
}
function subtraction ( a, b ) { //Вычитание
    return a - b;
}
function division ( a, b ) { //Деление
    return a / b;
}
function multiplication ( a, b ) { //Умножение
    return a * b;
}