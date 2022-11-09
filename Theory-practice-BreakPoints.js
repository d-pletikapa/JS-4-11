'use strict';
console.log('Тренировка BreakPoints');

{
    // вычисление факториала
    const fact = function (x) {
        if (x === 0 ) return 1;
        return x * fact(x-1);
    };

    console.log(fact(5));
}