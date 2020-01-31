$(document).ready(function () {
    $(function () {
        $("#date").datepicker();
    });
    $('select').dropkick();

});
function verifyEmail(email) {
    //email = form.email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
        alert("Enter valid email address");
    }
};
function verifyPhone(phone) {
    //phone = form.phone.value;
    var phoneno = /^\+?([0-9]{2})\)??([0-9]{8})$/;
    if (!phone.value.match(phoneno)) {
        alert("Enter valid Phone number");
    }
};
