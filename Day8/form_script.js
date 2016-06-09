$(document).ready(function() {
	$("#submit-btn").click(function() {
		if (phoneValidator($("#phone").val()) && emailValidator($("#email").val())) {
			$(".validator").text("Validated");
		}
		else $(".validator").text("");
	});
});



function phoneValidator(phoneNum) {
	if (phoneNum.length != 12) {
		$(".phone-error").text("Invalid Phone");
		return false;
	}

	for (var i = 0; i < 12; i++) {
		if (i === 3 || i === 7) {
			if (phoneNum[i] != "-") {
				$(".phone-error").text("Invalid Phone");
				return false;
			}
		}

		else if (isNaN(phoneNum[i])) {
			$(".phone-error").text("Invalid Phone");
			return false;
		}
	}

	$(".phone-error").text("");
	return true;
}

function emailValidator(email) {
	if (!email.includes('@') || !email.includes('.')) {
		$(".email-error").text("Invalid Email");
		return false;
	}

	var atIndex = email.indexOf('@');
	if (email.indexOf('.') < atIndex + 1) {
		$(".email-error").text("Invalid Email");
		return false;
	}
	console.log(atIndex);
	if (atIndex === 0) {
		$(".email-error").text("Invalid Email");
		return false;
	}

	$(".email-error").text("");
	return true;
}