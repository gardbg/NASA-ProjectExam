//backtotop

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// API
const content = document.getElementById("content");


const header = document.createElement("h1");
const headerText = document.createTextNode("These people are currently in space:");
header.appendChild(headerText);
header.style.marginBottom = "30px";
content.appendChild(header);

const loading = document.createElement("p");
const loadingText = document.createTextNode("Fetching data..");
loading.appendChild(loadingText);
content.appendChild(loading);

fetch('http://api.open-notify.org/astros.json')
  .then(function(response) {
    response.json().then(function(data) {
      content.removeChild(loading);
      console.log(data);

      Object.values(data.people).forEach(person => {
        console.log(person);
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const name = document.createTextNode(person.name);
        const craft = document.createTextNode(person.craft + ' Craft');
        

        p.appendChild(craft);
        h2.appendChild(name);
        div.appendChild(h2);
        div.append(craft);

        div.style.marginBottom = "30px";

        content.appendChild(div);
      });

      
    })
    //console.log(JSON.stringify(myJson));
  })
  .catch(function(err) {
    console.log("Fetch error: " + err);
  });