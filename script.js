var emailInput = document.getElementById("email_adress");
var submitButton = document.getElementById("submit");
//var form = document.getElementById("form");


var wrong = function(){
    if(emailInput.validity.typeMismatch===true){
        emailInput.setCustomValidity(" ");
        emailInput.className = "red_border";

        var errorIcon = document.getElementById("error_icon");
        errorIcon.style.display = "block";

        var errorMessage = document.getElementsByClassName("error_message");
        errorMessage[0].style.display = "block";
    }
    
};

submitButton.addEventListener("click",wrong);

//form.addEventListener("submit", () =>{

    //alert("submitted");
//});

//submitButton.addEventListener("click",() =>{

    //if(emailInput.validity.typeMismatch){
      //  emailInput.setCustomValidity(" ");
       // emailInput.className.List = "red_border";

       // var errorIcon = document.getElementsById("error_icon");
       // errorIcon.style.display = "block";

       // var errorMessage = document.getElementsByClassName("error_message");
       // errorMessage.style.display = "block";
    //}else{
       // emailInput.setCustomValidity("");
    //}
    
//});



