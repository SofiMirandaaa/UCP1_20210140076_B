document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var hour = today.getHours();
    var greeting;
  
    if (hour < 12) {
      greeting = "Good Morning, Sofi";
    } else if (hour < 18) {
      greeting = "Good Afternoon, Sofi";
    } else if (hour < 21) {
        greeting = "Good Evening, Sofi";
    } else {
      greeting = "Good Night, Sofi";
    }
  
    document.getElementById('greeting').textContent = greeting;
  
    var datetime = today.toDateString() + ', ' + today.toLocaleTimeString();
    document.getElementById('datetime').textContent = datetime;
  });
  