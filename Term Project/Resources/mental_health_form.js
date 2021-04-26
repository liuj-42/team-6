
$(function() {
    $("input").checkboxradio();
});

function validateWellbeing(formObj) {
    if ($.validateWellbeing()) {
        alert("Saved");
        //one of the buttons has been selected, good
    } else {
        alert("You must select one of the buttons in order to submit the form");
    }
    return false;
}

$.validateWellbeing = function () {
    var $selected = $('input[name="radio"]:checked', '#wellbeing-status');
    if ($selected.length == 0) {
        return false;
    } else {
        return true;
    }
};

function focusProducts(formObj) {
    formObj.initials.focus();
}

function validateProducts(formObj) {
    var error = "saved";
    if (formObj.initials.value == "") {
        error = "Missing field(s): initials";
        formObj.initials.focus();
    }
    if (formObj.productDesc.value == "") {
        if (error == "saved") {
            error = "Missing field(s): product/activity description";
            formObj.productDesc.focus();
        } else {
            error += ", product/activity description";
        }
    } 
    if (formObj.productURL.value == "") {
        if (error == "saved") {
            error = "Missing field(s): link to the product/activity";
            formObj.productURL.focus();
        } else {
            error += ", link to the product/activity";
        }
    }
    alert(error);
    return false;
}
