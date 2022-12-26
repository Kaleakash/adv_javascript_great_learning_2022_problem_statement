let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons.length)

buttons.map((button) => {
  console.log("Hi")
  button.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        var choice = event.target.innerText
    switch (choice) {
      case "C":
        display.innerText = "";     // clear the display screen 
        break;
      case "=":
        if (display.innerText == "") {
          alert("no value entered!!");
        } else {
          try {
            display.innerText = eval(display.innerText);    // eval converting string to number. 
          } catch {
            display.innerText = "Error";
          }
        }
        break;
      case "Backspace":
        if (display.innerText) {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
        }
        break;
      default: {
        //alert(event.target.innerText);
        display.innerText += event.target.innerText;
      }
    }
  });
});
