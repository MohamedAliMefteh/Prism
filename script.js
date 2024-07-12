function triggerTran(){
    const choice1 = document.querySelector(".choice1");
    const choice2 = document.querySelector(".choice2");
    const toogle = document.querySelector(".toogle");
    const signup = document.querySelector(".signup");
    const signin = document.querySelector(".signin");
    toogle.style.transform="translate(-15.4%,-7.4%)";
    toogle.style.borderRadius="30px 100px 100px 30px";
    choice1.style.display="none";
    choice2.style.display="block";
    signup.style.opacity=0;
    signup.style.transform="translate(5%)";
    signin.style.opacity=1;
    signin.style.transform="translate(0%)";
}
 function oppTriggerTran(){
    const choice1 = document.querySelector(".choice1");
    const choice2 = document.querySelector(".choice2");
    const toogle = document.querySelector(".toogle");
    const signup = document.querySelector(".signup");
    const signin = document.querySelector(".signin");
    toogle.style.transform="translate(92.4%,-7.4%)";
    toogle.style.borderRadius="100px 30px 30px 100px";
    choice1.style.display="block";
    choice2.style.display="none";
    signup.style.opacity=1;
    signup.style.transform="translate(0%)";
    signin.style.opacity=0;
    signin.style.transform="translate(-5%)";
 }