




var kiemTraRong = function (idValue, idError) {

    var inputText = document.getElementById(idValue);

    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = 'không được bỏ trống !';
        document.getElementById(idError).style.opacity = 1;
        return false;
    } else {
        document.getElementById(idError).style.opacity = 0;
        return true;
    }

}

var kiemTraTatCaLaChu = function (selectorValue, selectorError) {
    //Lấy giá trị người dùng nhập vào từ selector
    var inputText = document.querySelector(selectorValue);
    var regexChu = /^[A-Za-z ]+$/;
    if (regexChu.test(inputText.value)) {
        //Hợp lệ 
        document.querySelector(selectorError).style.opacity = 0;
        document.querySelector(selectorValue).style.borderBottomColor = "green";
        return true;
    } else {
        //Không hợp lệ
        document.querySelector(selectorError).innerHTML = inputText.name + ' phải là chữ !';
        document.querySelector(selectorError).style.opacity = 1;
        document.querySelector(selectorValue).style.borderBottomColor = "red";
        return false;
    }
}


var kiemTraTatCaLaSo = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(inputText.value)) {
        //Hợp lệ 
        document.querySelector(selectorError).style.opacity = 0;
        document.querySelector(selectorValue).style.borderBottomColor = "green";
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' yêu cầu nhập số !';
        document.querySelector(selectorError).style.opacity = 1;
        document.querySelector(selectorValue).style.borderBottomColor = "red";
        return false;
    }
}


var kiemTraEmail = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(inputText.value)) {
        document.querySelector(selectorError).style.opacity = 0;
        document.querySelector(selectorValue).style.borderBottomColor = "green";
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' không hợp lệ !';
        document.querySelector(selectorError).style.opacity = 1;
        document.querySelector(selectorValue).style.borderBottomColor = "red";
        return false;
    }
}



var kiemTraDoDai = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength && regex.test(inputText.value)) {
        document.querySelector(selectorError).style.opacity = 0;
        document.querySelector(selectorValue).style.borderBottomColor = "green";
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' phải có từ ' + inputText.minLength + ' đến ' + inputText.maxLength + ' ký tự và có ít nhất 1 ký tự IN HOA, một ký tự thường và một số';
        document.querySelector(selectorError).style.opacity = 1;
        document.querySelector(selectorValue).style.borderBottomColor = "red";
        return false;
    }
}

var kiemTraGiaTri = function (selectorValue, selectorError, valuePassword) {
    var inputText = document.querySelector(selectorValue);
    var value = document.getElementById(valuePassword).value;
    if (inputText.value !== value || inputText.value == "") {
        document.querySelector(selectorError).innerHTML = inputText.name + ' không đúng';
        document.querySelector(selectorError).style.opacity = 1;
        document.querySelector(selectorValue).style.borderBottomColor = "red";
        return false;
    } else {
        document.querySelector(selectorError).style.opacity = 0;
        document.querySelector(selectorValue).style.borderBottomColor = "green";
        return true;
    }
}

var check_firstName = function (){
    kiemTraTatCaLaChu("#firstName", "#errorMess_firstName")
}
var check_lastName = function (){
    kiemTraTatCaLaChu("#lastName", "#errorMess_lastName")
}
var check_password = function (){
    kiemTraDoDai("#password", "#errorMess_password");
}
var check_confirmPassword = function (){
    kiemTraRong("confirmPassword", "errorMess_confirmPassword");
    kiemTraGiaTri("#confirmPassword", "#errorMess_confirmPassword","password")
}
var check_phone = function (){
    kiemTraTatCaLaSo("#phone", "#errorMess_phone");
}
var check_email = function (){
    kiemTraEmail("#email", "#errorMess_email")
}


var checkValidation = function () {
    var valid = true;

    valid = kiemTraTatCaLaChu("#firstName", "#errorMess_firstName") & kiemTraTatCaLaChu("#lastName", "#errorMess_lastName") & kiemTraDoDai("#password", "#errorMess_password") &  kiemTraGiaTri("#confirmPassword", "#errorMess_confirmPassword","password") & kiemTraTatCaLaSo("#phone", "#errorMess_phone") & kiemTraEmail("#email", "#errorMess_email");

    if (!valid) {
        return false;
    }
    alert("Bạn đã đăng kí thành công");
    return true;
}


document.getElementById("firstName").onblur = check_firstName;
document.getElementById("lastName").onblur = check_lastName;
document.getElementById("password").onblur = check_password;
document.getElementById("confirmPassword").onblur = check_confirmPassword;
document.getElementById("phone").onblur = check_phone;
document.getElementById("email").onblur = check_email;


document.getElementById('btnDangKy').onclick = checkValidation;


