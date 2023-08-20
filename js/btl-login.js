$(document).ready(()=> {
    $(".errorText").hide();
    $(".login-button").click(()=>{

        if(($("#username").val() === "") || ($("#password").val() === ""))
        {
            if($("#username").val() === ""){
                $("#username").addClass("error");
            }
            else   $("#username").removeClass("error");
            if($("#password").val() === ""){
                $("#password").addClass("error");
            }
            else   $("#password").removeClass("error");
            $(".errorText").show();
            return;
        }
        else {
            $("#username").removeClass("error");
            $("#password").removeClass("error");
            $(".errorText").hide();
            localStorage.username = $("#username").val();
            window.location.href = "btl-trangchu.html";
            localStorage.ID = 1800200079865;
            localStorage.amount = 1000000000;
        }

    })



const pwd = document.getElementById("password");
const chk = document.getElementById("show-password");
chk.onchange = function() {
    pwd.type = chk.checked ? "text" : "password";
};


});
