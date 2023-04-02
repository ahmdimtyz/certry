// Define a function to load the navbar HTML file
function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("navbar").innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "navbar.html", true);
    xhr.send();
  }
  
  // Call the function to load the navbar on page load
  window.addEventListener("load", loadNavbar);
  