// function contact(event){
// event.preventDefault();
// const email = event.target.email.value;
// const m = document.getElementsById("s1");
// const emailP=document.createElement("p");
//     emailP.innerText=`Your E-mail : ${email}\n\nSubscription added\nThank You`;
//     emailP.classList.add("m-name")
//     console.log(emailP);
//     m.appendChild(emailP); 
// }
function contact(event){

    event.preventDefault();

    const email=event.target.email.value;
    // console.log(name)

    const m=document.getElementById("s1")

    // console.log(skd)

    const emailP=document.createElement("p");
    emailP.innerText=`Subscription added\nThank You`;

    emailP.classList.add("m-name")
    console.log(emailP);
    m.appendChild(emailP); 
}