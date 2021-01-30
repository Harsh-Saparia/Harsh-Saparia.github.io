const inputs = document.querySelectorAll(".input");


/* For Password varification */
// function validateR() {

    // var myInput = document.getElementById("pass");
	// var lowerCaseLetters = /[a-z]/g;
	// var numbers = /[0-9]/g;
	// var upperCaseLetters = /[A-Z]/g;
	// document.getElementById("message").style.color="red";
	// if( (myInput.value.match(lowerCaseLetters)) && (myInput.value.match(numbers)) && (myInput.value.match(upperCaseLetters)) && (myInput.value.charAt(0) != "_") && (!myInput.value.endsWith("_")) )
	// {
	// 	return true;
	// }
	// else
	// {
	// 	var text =" don't use '_' and Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
	// 	document.getElementById("message").innerHTML=" "+text;
	// 	return false;
	// }
// }


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
