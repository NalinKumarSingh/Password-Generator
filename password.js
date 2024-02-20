let Upper_case = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let Lower_case = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let Num = [0,1,2,3,4,5,6,7,8,9];
let Char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|'];
let Generated_pass = document.querySelector('#password');
let Ucase = document.querySelector('#Uppercase');
let Lcase = document.querySelector('#Lowercase');
let Nums = document.querySelector('#Numbers');
let Symb = document.querySelector('#Symbols');
let len = document.querySelector('#passlen');
let gp = [];
function gnrtrand(selectedArray) {
    let randomIndex = Math.floor(Math.random() * selectedArray.length);
    return randomIndex;
}

function passgen() {
    let length = len.value;
    for(let i = 0; i < length; i++) {
        if(gp.length == length) {
            break;
        }
        if(Ucase.checked) {
            gp.push(Upper_case[gnrtrand(Upper_case)]);
        }
        if(gp.length == length) {
            break;
        }
        if(Lcase.checked) {
            gp.push(Lower_case[gnrtrand(Lower_case)]);
        }
        if(gp.length == length) {
            break;
        }
        if(Nums.checked) {
            gp.push(Num[gnrtrand(Num)]);
        }
        if(gp.length == length) {
            break;
        }
        if(Symb.checked) {
            gp.push(Char[gnrtrand(Char)]);
        }
        if(gp.length == length) {
            break;
        }
    }
    display(gp);
}
let copy_pass = '';
function display(passwordArray) {
    let finalpass = '';
    for(let j = 0; j < passwordArray.length; j++) {
        finalpass += passwordArray[j];
    }
    Generated_pass.value = finalpass;
    copy_pass = finalpass;
}
function copy(){
    navigator.clipboard.writeText(copy_pass);
}
