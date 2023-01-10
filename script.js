state = 50

onkeydown = (event) => { 
  
  if (event.key == "a") {
  state = state - 5
  }
  
  if (event.key == "l") {
  state = state + 5
  }
  
  if (state<0) {
    alert ("🫀 is the winner")
    state = 50
  }
  
   if (state>110) {
    alert ("🧠 is the winner")
    state = 50
  }
  
  p1.style.top = state + "%"
  p2.style.top = 100 - state + "%"
};