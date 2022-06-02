let id_user = '01029340815';
let pass_user = 'hwl';

function login() {
     let inputphone = document.getElementById("phone").value;

     let inputpass = document.getElementById("password").value;


     if (_.isEmpty(inputphone)) {

        document.getElementById('inputphone-error').innerHTML = '전화번호 입력하시오';


    } else {

        document.getElementById('inputphone-error').innerHTML = '';

    }
    if (_.isEmpty(inputpass)) {
        document.getElementById('inputpassword-error').innerHTML = '비밀번호 입력하시오';

    } else {
        document.getElementById('inputpassword-error').innerHTML = '';

    }


    if (inputphone == id_user && inputpass == pass_user) {
        window.location = "student.html"

    } else {
        alert('ID-비밀번호 확인해주세요!');

    }
}