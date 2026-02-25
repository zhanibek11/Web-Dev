let input = prompt("Who are you?");

 
if(input === "Admin"){
    let password = prompt("Password?");
    if(password == "TheMaster"){
        alert("welcome!")
    }
    else if(password == null){
        alert("canceled!")
    }
    else{
        alert("wrong password!")
    }
}
else if(input!="Admin" && input!=null){

    alert("I don't know you!")
}
else{
    alert("canceled!")
}