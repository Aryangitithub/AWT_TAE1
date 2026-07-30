function validateForm(){

    let name=document.getElementById("name").value;

    let roll=document.getElementById("roll").value;

    let email=document.getElementById("email").value;

    let mobile=document.getElementById("mobile").value;

    // Name Validation

    let namePattern=/^[A-Za-z ]+$/;

    if(!namePattern.test(name)){

        alert("Enter valid name");

        return false;

    }

    // Email Validation

    if(email==""){

        alert("Enter Email");

        return false;

    }

    // Mobile Validation

    if(mobile.length!=10){

        alert("Mobile should be 10 digits");

        return false;

    }

    // Skill Level Function

    let year=document.getElementById("year").value;

    document.getElementById("message").innerHTML=skill(year);

    return false;

}

// Function

function skill(year){

    if(year=="First Year")

        return "Skill Level : Beginner";

    else if(year=="Second Year")

        return "Skill Level : Intermediate";

    else if(year=="Third Year")

        return "Skill Level : Advanced";

    else

        return "Skill Level : Expert";

}

// Array

let tech=["HTML","CSS","JavaScript"];

// DOM

let list=document.getElementById("technology");

tech.forEach(function(item){

    let li=document.createElement("li");

    li.innerHTML=item;

    list.appendChild(li);

});
