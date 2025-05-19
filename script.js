const form=document.getElementById("Myform");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name=document.getElementById("name").value;
    const surname=document.getElementById("surname").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementsByName("gender") ;
    
    
    


    console.log("First name:", name);
    console.log("Last name:", surname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Conform Password:", confirmPassword);
    console.log("Date of Birth:", dob);
    for (let i = 0 ; i < gender.length; i++){
        if(gender[i].checked){
            console.log("Gender:", gender[i].value);
        }
    }
    


    if(password.length<8){
        console.log("Error: Please, You have to enter at least 8 characters.");
    }
   

    if(password!==confirmPassword){
        console.log("Password and Confirm Password are not same.");
    }
    else{
        console.log("Sucsessful!");
    }

}

);