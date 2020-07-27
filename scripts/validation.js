// Form validation (using jQuery Validation Plugin)
$('#form').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        lastName: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        emailAddress: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            number: true,
            minlength: 11
        },
        tourType: {
            required: true
        },
        peopleNum: {
            required: true
        },
        pickupAddress: {
            required: true
        },
        tourDate: {
            required: true
        },
        startTime: {
            required: true
        }
    },
    // Some custom error messages
    messages: {
        firstName: {
            minlength: "First name must be 3 letters or more.",
            maxlength: "First name must be less than 30 letters."
        },
        lastName: {
            minlength: "Last name must be 3 letters or more.",
            maxlength: "Last name must be less than 30 letters."
        },
        phone: {
            minlength: "Phone number must be at least 11 digits."
        }
    },
    submitHandler: function(form) {
        form.submit();
      }
});