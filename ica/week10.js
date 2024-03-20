//const buttons = document.querySelectorAll("button");
//("button");

//for (const button in buttons) {
  //  button.addEventListener('click', changeText);

//}
        //button.addEventListener('click', changeText);

        // function runFunction() {
        // console.log ("test");
        //  const name = prompt("PLease enter a name");
        //   button.textContent = `Player 1: ${name}`;
        //}
        const button1 = document.querySelector(".button1");
        button1.addEventListener('click',changeText);

        const button2 = document.getElementById("button2");
        button2.addEventListener('click',changeItem);

        const heading = document.querySelector("h1");
        function changeText() {
            const head = prompt('tell me a secret');
            heading.textContent = head;
           // alert('text successful');
        }
        function changeItem(){
            alert('TEST')
        }
