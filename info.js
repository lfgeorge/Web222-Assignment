
function infoValidation(){
    /* check the first name */
    var error1 = document.querySelector("#error1");
    var passEntry1 = true;
    var alphCapString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var fname = document.getElementById("fname");
    var inputValue = fname.value.trim();
    if (inputValue.length == 0) {
        passEntry1 = false;
    }  
    if (alphCapString.indexOf(inputValue.substr(0,1)) < 0) {   
        passEntry1 = false;
    }
    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) {
            passEntry1 = false; 
        }
    }
    if (!passEntry1){
        error1.innerHTML += "<p>* Must start with a cap and only alphabet allowed.</p>";
    }


    /* check the last name */
    var error2 = document.querySelector("#error2");
    var passEntry2 = true;
    var lname = document.getElementById("lname");
    inputValue = lname.value.trim();
    if (inputValue.length == 0) {
        passEntry2 = false;
    }  
    if (alphCapString.indexOf(inputValue.substr(0,1)) < 0) {   
        passEntry2 = false;
    }
    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) {
            passEntry2 = false; 
        }
    }
    if (!passEntry2){
        error2.innerHTML += "<p>* Must start with a cap and only alphabet allowed.</p>";
    }
    

    /* check the password */
    var error3 = document.querySelector("#error3");	 
    var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var passEntry3 = true;
    var password1 = document.getElementById("password1");
    inputValue = password1.value.trim();
    if (inputValue.length != 6) {
        passEntry3 = false
    }
    if (alphString.indexOf(inputValue.substr(0,1)) < 0) {
        passEntry3 = false;
    }

    var digit = false;
	var upperCase = false;
    for(var i = 0; i < inputValue.length; i++) {
        // check at least one digit
		if(inputValue[i] >= '0' && inputValue[i] <= '9') {
			digit = true;
        }
		if(inputValue[i] >= 'A' && inputValue[i] <= 'Z') {
            upperCase = true;
        }
    }
    if (!digit || !upperCase) {
        passEntry3 = false;
    }
	
        
    /* check the password match */
    var passEntry4 = true;
    var password2 = document.getElementById("password2");
    var inputValue2 = password2.value.trim();
    if(inputValue != inputValue2){
        passEntry4 = false;
    }
    
    if(!passEntry3){
        error3.innerHTML += "<p>* The password must be upto 6 long, must start with a character, must have at least 1 digit and 1 uppercase.</p>";
    }
    else if (!passEntry4) {
        error3.innerHTML += "<p>* The password strings must match.</p>";
    }

    /* check the username */
    var error4 = document.querySelector("#error4");
    var passEntry5 = true;
    var username = document.getElementById("username");
    inputValue = username.value.trim();
    if (inputValue.length < 6) {
        passEntry5 = false;
    }  
    if (alphString.indexOf(inputValue.substr(0,1)) < 0) {   
        passEntry5 = false;
    }
    if (!passEntry5){
        error4.innerHTML += "<p>*  username must start with a letter, must have at least 6 characters.</p>";
    }

    /* check the education */
    var error5 = document.querySelector("#error5");
    var passEntry6 = true;
    var education = document.signup.entry6.selectedIndex;
    if (education == "6") {                                        
        passEntry6 = false;
    }
    if (!passEntry6){
        error5.innerHTML += "<p>*  education must select one option.</p>";
    }

    /* check the Education Status */
    var error6 = document.querySelector("#error6");
    var radio_num = document.signup.entry7.length;
    var passEntry7 = false;  

    for (var i = 0; i < radio_num; i++) {
        if (document.signup.entry7[i].checked == true) {
            passEntry7 = true;
        } 
    } 

    if (!passEntry7) {                                        
        error6.innerHTML += "<p>*  Education Status must select one option.</p>";
    }

    /* check the age */
    var error7 = document.querySelector("#error7");
    var passEntry8 = true;
    var age = document.getElementById("age");
    inputValue = age.value.trim();
    if (inputValue < 18 || inputValue > 60 ) {
        passEntry8 = false;
    } 
    if (!passEntry8) {                                        
        error7.innerHTML += "<p>*  Age must be in between 18-60.</p>";
    }
    if(passEntry1 && passEntry2 && passEntry3 && passEntry4 && passEntry5 && passEntry6 && passEntry7 && passEntry8) {
        return true;
    }
    else {
        return false;
    }
}

function clearerrors() {
    document.querySelector("#error1").innerHTML = " ";
    document.querySelector("#error2").innerHTML = " ";
    document.querySelector("#error3").innerHTML = " ";
    document.querySelector("#error4").innerHTML = " ";
    document.querySelector("#error5").innerHTML = " ";
    document.querySelector("#error6").innerHTML = " ";
    document.querySelector("#error7").innerHTML = " ";
}
function validateForm(){
    clearerrors();
    return infoValidation();
}

