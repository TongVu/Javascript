var txt = document.getElementById('txt');
var result = document.getElementById('result');

txt.addEventListener('keypress', palindrome);


function palindrome(e) {
    if (e.which == 13) { // 13 là keycode enter 
        // Biến chuỗi thành chữ thường và tách ra thành array
        var input = txt.value.toLowerCase();
        input = input.split('');

        // So sanh dau - duoi
        var tailVal = input.length - 1;
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== input[tailVal]) {
                result.innerText = 'Not A Palindrome';
            }
            if (input[i] === input[tailVal] && tailVal === 0) {
                palindrome.innerText = 'Palindrome';
                result.innerText = 'Palindrome';
            }
            tailVal--;
        }
    }

}
