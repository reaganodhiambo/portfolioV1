let username = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

let send = document.getElementById("btn");
send.addEventListener("click",
    function (e) {
        e.preventDefault();
        console.log("Name:",username.value);
        console.log("Email:",email.value);
        console.log("PhoneNumber:",phoneNumber.value);
        console.log("Subject:",subject.value);
        console.log("Message:",message.value);
    })