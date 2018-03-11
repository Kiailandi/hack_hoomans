$(function() {
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 0,
        backDelay: 500,
    });
});

function Email() {
    var name = $("#name")[0].value;
    var email = $("#email")[0].value;
    var service = $("#service")[0].value;
    var message = $("#message")[0].value;
    if((name == $("#name")[0].placeholder) || name == ""){
        alert("Insert a valid name.");
        $("#name")[0].focus();
    } else if ((email.indexOf("@") == (-1)) || (email == "")) {
        alert("Insert a valid email adress.");
        $("#email")[0].focus();
    } else {
      location.href = "mailto:" + "tommaso.montefusco@hotmail.it" + "?Subject=infosec: " + service + "&Body=" + "From: " + name + "<br>" + message + "<br>" + "Contact: " + email;
    }
}
