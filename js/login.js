function login(userName,passWord){
	if(userName=="sheyi" && passWord=="Sheyi"){
		//create session variables or cookies and redirect to home page
		window.location = "http://localhost/room-checking-app/home.html";
	}
	else
		alert("Wrong Username or password, try again");
}

function logout(){
	//destroy session variable or cookies and redirect to login page
	window.location = "http://localhost/room-checking-app/index.html";
}