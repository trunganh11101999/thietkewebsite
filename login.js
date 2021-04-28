var user = ["user1","user2"];
var admin = ["admin1","admin2"];
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('frmlogin');

if(formLogin.attachEvent){
	formLogin.attachEvent('submit', login);
} else {
	formLogin.addEventListener('submit', login);
}


function login() {
	var username = inputUsername.value;
	var password = inputPassword.value;
	var i
	for (i = 0 ; i <= 2 ; i ++) {

		if (username==user[i] && password==username)
		{
		window.open('./user.html');
		}else{
			if (username==admin[i] && password==username)
			{
				window.open('./admin.html');
			}else{   
				window.alert('Sai Mat Khau - Vui Lòng Nhap Lai !');
				break;			}
			}
		}




	}// JavaScript Document