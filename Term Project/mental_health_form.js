function focusInitials(formObj) {
    formObj.initials.focus();
}

$(function() {
    $("input").checkboxradio();
});

// ui-checkboxradio-checked ui-state-active


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

function validateProducts(formObj) {
    if (formObj.products.value == "") {
        alert("You must enter a product to submit the form");
    } else {
        alert("Saved");
    }
    return false;
}
