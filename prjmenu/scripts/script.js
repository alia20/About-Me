/* 
FileName : script.js
Name     : Amin Ali 
Email    : ali20@csp.edu
Date 	 : 9 December 2016
Revision :
*/
/* To display msg */
function displayMsg(msg){
	document.getElementById('msg').innerHTML = msg;
}
/* Clearing msg with timeout of 3 sec */
function clearMsg(){
	setTimeout(function(){
		document.getElementById('msg').innerHTML = "";	
	},3000);
	
}
/* Checking the id of input being handled and returning correct msg */
function displayInfo(id){
	console.log(id);	
	var msg = "";
	if(id == 'txtFName'){
		msg = "Thanks for filling first name";
	}else if(id == 'txtLName'){
		msg = "Thanks for filling last name";
	}else if(id == 'input-email'){
		msg = "Thanks for filling email";
	}
	// document.getElementById('info').innerHTML = str;
	displayMsg(msg);

}
/* First msg before filling form*/
displayMsg('To Contact Me Please Fill this Form');