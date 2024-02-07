function validateForm(event) {
  let form = document.getElementById("myForm");
  let isValid = form.checkValidity();

  if (!isValid) {
    event.preventDefault();
    alert("Please fill out all the required fields correctly.");
    return;
  }

  // Additional validation for specific fields
  let invalidFields = ["name", "familyName", "phoneNumber", "title", "text"];
  for (let i = 0; i < invalidFields.length; i++) {
    let fieldValue = document.getElementById(invalidFields[i]).value;

    if (invalidFields[i] === "name" || invalidFields[i] === "familyName") {
      // Check for length for 'name' and 'familyName'
      if (fieldValue.length <= 5) {
        event.preventDefault();
        alert(
          "Invalid " +
            invalidFields[i] +
            "! Please enter more than 5 characters."
        );
        return;
      }
    }

    if (invalidFields[i] === "phoneNumber") {
      // Check for valid phone number format (11 digits)
      if (!isValidPhoneNumber(fieldValue)) {
        event.preventDefault();
        alert(
          "Invalid phone number! Please enter a valid 11-digit phone number."
        );
        return;
      }
    }

    if (!isValidInput(fieldValue)) {
      event.preventDefault();
      alert(
        "Invalid input! Please avoid using restricted words and only use alphanumeric characters, underscores, and Persian characters."
      );
      return;
    }
  }
}

function isValidInput(input) {
  // Allow Persian characters in addition to alphanumeric and underscores
  if (input.match(/^[\u0600-\u06FFa-zA-Z0-9_]+$/)) {
    // Check for banned words
    let bannedWords = ["select", "sleep", "from"];
    for (let i = 0; i < bannedWords.length; i++) {
      if (input.toLowerCase().includes(bannedWords[i])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function isValidPhoneNumber(phoneNumber) {
  // Check for a valid 11-digit phone number
  return phoneNumber.match(/^\d{11}$/);
}
