function login(userName,passWord){
	if(userName=="sheyi" && passWord=="Sheyi"){
		//create session variables or cookies
		window.location = "http://localhost/room-checking-app/home.html";
	}
	else
		alert("Wrong Username or password, try again");
}

function logout(){
	//destroy session variable or cookies
	window.location = "http://localhost/room-checking-app/index.html";
}