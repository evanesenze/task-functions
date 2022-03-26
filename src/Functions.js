/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export const higherThan = (num) => (element) => element > num;

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export const hasSubstring = (substr) => (element) =>
    element.search(substr) > -1;

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export const multiply = (num) => (num2) => num * num2;
