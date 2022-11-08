// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// alert("i you");
function multiply(num1,num2){
    let result = num2 * num1;
    return result;
}

// document.querySelector("html").onclick = function(){
//     alert("dont touch me");
// }

/*
document.querySelector('html').addEventListener('click', () => {
     alert('别戳我，我怕疼。');
   });
 */

 let myImage = document.querySelector("img");
 myImage.onclick = function(){
     let imSrc = myImage.getAttribute("src");
     if(imSrc === "images/Snipaste_2022-11-07_22-32-58.png" ){
        myImage.setAttribute('src','images/Snipaste_2022-11-08_15-08-00.png');
     }else{
        myImage.setAttribute('src','images/Snipaste_2022-11-07_22-32-58.png');
     }


 }

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");

    function setUserName(){
        let myName = prompt("input your name.");
        if(!myName){
            setUserName();
        }else{
            localStorage.setItem("name",myName);
            myHeading.textContent = 'Mozilla 酷毙了,' + myName;
        }
    }

    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla 酷毙了,' + storedName;
    }

    myButton.onclick = function(){
        setUserName();
    }