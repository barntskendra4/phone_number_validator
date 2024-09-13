function phoneNumber(str) {
    var numbers = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/
    if (str.match(numbers)) {
        return "Yep, this is valid for sure";
    } 
     else {
        return "Nahh this is not a real one";
     }

}
console.log(phoneNumber("555-555-5555"));
console.log(phoneNumber("123**&!!asdf#"));
console.log(phoneNumber("4026408860"));
console.log(phoneNumber("1(402)-239-8740"));

function sayhello(){
    document.getElementById("results").innerHTML = hello();
}

function hello(){
    var myName = document.getElementById("number").value;
    return phoneNumber(myName);
}

document.getElementById("clicker").addEventListener("click", sayhello);