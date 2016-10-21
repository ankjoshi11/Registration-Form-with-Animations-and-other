/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});


//var name = "test20@xyz", password = "usertest123"
document.getElementById("submit").disabled = true;

function firstnamecap(){ 																							// FIRST NAME
var fname =  document.getElementById("column-left").value;

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
 var x = fname.capitalizeFirstLetter();
document.getElementById("column-left").value = x;
}

function abc (){																				//for NAME FIELDS ALPHABATICAL VALIDATION
	var reg = /^[a-z]+$/i;
	var fname =  document.getElementById("column-left").value;
if(!reg.test(fname))
{
	alert("Please enter alphabates for name fields...");
	document.getElementById("column-left").value = "";
	document.getElementById("column-left").focus();
return false;
}

}

function lastnamecap(){        																	    // LAST NAME
var lname =  document.getElementById("column-right").value;

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var l = lname.capitalizeFirstLetter();
document.getElementById("column-right").value = l;
}

function abc2 (){
var lname =  document.getElementById("column-right").value;
																			//for NAME FIELDS ALPHABATICAL VALIDATION
	var reg = /^[a-z]+$/i;
if(!reg.test(lname))
{
	alert("Please enter alphabates for name fields...");
	document.getElementById("column-right").value = "";
	document.getElementById("column-right").focus();
return false;
}
}

function pwrd()
{
	var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	if(!pass.test(password.value))
{
alert("Please enter Password with : Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet & 1 Number...");
document.getElementById("password").value = "";
	document.getElementById("password").focus();
return false;
}

}


function validateZipCode(){
  var zip = /^\d{5}$|^\d{5}-\d{4}$/;
	if(!zip.test(zipcode.value))
{
	alert("Zipcode must be 5 digits");
	document.getElementById("zipcode").value = "";
	document.getElementById("zipcode").focus();
return false;

}
}


function validatePhoneNumber(){
  var phone = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
	if(!phone.test(phonenumber.value))
{
	alert("Phonenumber must contains digits..");
	document.getElementById("phonenumber").value = "";
	document.getElementById("phonenumber").focus();
return false;

		}
}

function checkEmail() {
var email = document.getElementById("emailid");
var filter = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
if (!filter.test(email.value)) {
alert('Please provide a valid email address');
document.getElementById("email").value = "";
	document.getElementById("email").focus();
return false;

 email.focus();

	}
}

function validatePhone() {

  var num = phonenumber.value.replace(/[^\d]/g,'');

    if(num.length != 10) {
			 alert('Please enter a valid phone number including area code');
				}
				 else {
                  phonenumber.value = "(" + num.substring(0,3) + ") " + num.substring(3, 6) + " - " + num.substring(6);
                    }
                }

function signup()
{
	if(document.getElementById("remember_me").checked == true)
	{
		document.getElementById("submit").disabled = false;
	}
	else
    {
        document.getElementById("submit").disabled = true;
    }
}