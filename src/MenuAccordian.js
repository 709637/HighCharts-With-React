import { event } from "react-ga";

export var accordianfunc = () =>{
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    
  acc[i].addEventListener("click", function(i) {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    var open = document.getElementsByName("open");
    var close = document.getElementsByName("close");
    var open1 = document.getElementsByName("open1");
    var close1 = document.getElementsByName("close1");

    if (panel.style.display === "flex") {
      panel.style.display = "none";
      console.log(i,acc[i],typeof event.currentTarget != "undefined")
        // if (i.srcElement.id == "accordian1"){
        //     open[0].style.display = "none";
        //     close[0].style.display = "flex";
        //   }
        //   else{
        //     open1[0].style.display = "none";
        //     close1[0].style.display = "flex";
        //   }
      
      
      
      
    } else {
      panel.style.display = "flex";
        // if (i.srcElement.id == "accordian1"){
        //     close[0].style.display = "none";
        //     open[0].style.display = "flex";
        //   }
        //   else{
        //     open1[0].style.display = "flex";
        //     close1[0].style.display = "none";
        //   }
      
      
      
      
    }
  });
}

} 