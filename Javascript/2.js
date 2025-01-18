function yunsuan(flag, num1, num2) {
    switch (flag) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'error,除数不能为0';
            }
            else
            return num1 / num2;
        default:
            return '无效的操作符';
    }
}
console.log(yunsuan('+', 2, 3));  
console.log(yunsuan('-', 5, 3)); 
console.log(yunsuan('*', 2, 3)); 
console.log(yunsuan('/', 5, 3));  
