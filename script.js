const panels = document.querySelectorAll('.panel');

function togglesOpen(){
    this.classList.toggle('open');
}
function togglesActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click',togglesOpen));
panels.forEach(panel => panel.addEventListener('transitionend',togglesActive));




document.getElementById("name").addEventListener("click", function() {
    document.getElementById("name-group").classList.add("slideIn");
  });
  
  document.getElementById("email").addEventListener("click", function() {
    document.getElementById("email-group").classList.add("slideIn");
  });
  
  document.getElementById("message").addEventListener("click", function() {
    document.getElementById("message-group").classList.add("slideIn");
    document.getElementById("submit").classList.add("slideIn");
  });






document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // You can add validation or other handling here
    
    // For demonstration purposes, just displaying the submitted data
    var status = document.getElementById("status");
    status.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
  });



  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".social-icons").style.opacity = "1";
  });
  


