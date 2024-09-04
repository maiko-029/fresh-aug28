      document.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
      }
      );
      document.onkeydown = function(e) {
          if(event.keyCode == 123) {
            return false;
          }
          if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
          }
          if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
          }
          if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
          }
          if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
          }
      }
      document.addEventListener('contextmenu', event=> event.preventDefault()); 
      document.onkeydown = function(e) { 
        if(event.keyCode == 123) { 
        return false; 
        } 
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
        return false; 
        } 
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
        return false; 
        } 
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
        return false; 
        } 
      } 
      // Get the modal
      var modal = document.getElementById("myModal");

      //modal for login
      var login = document.getElementById("loginModal");

      // Get the button that opens the modal
      var btn= document.getElementById("myBtn");

      //get btn after inpute pin
      var loginbtn= document.getElementById("loginBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal for login
      btn.onclick = function() {
      login.style.display = "block";
      }


      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
      modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      }
      }

      //for login modal
      span.onclick = function() {
      modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
      if (event.target == login) {
      login.style.display = "none";
      }
      }

      // use enter keyboard
      var input = document.getElementById("pin");
      
      input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("loginBtn").click();
        }
      });

      function validate(){

        var pin = document.getElementById("pin").value;
        
        if ( pin == "141997"){

          alert ("PIN IS CORRECT");
          modal.style.display = "block";
          login.style.display = "none"; // Redirecting to other page.
          return false;
        }
        else{
        
        alert("WROOOOOONG");
        // Disabling fields after 3 attempts.
      
        }
      }