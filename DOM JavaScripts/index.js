
document.querySelector("input").click();
// Manipulation by Tag
document.getElementsByTagName("li")[2].style.color="blue";
// Manipulation by Class
document.getElementsByClassName("btn")[0].style.color="red";
// Manipulation by Id
document.getElementById("title").innerHTML="Adios";
// Manipulation by hierarchical elements
document.querySelector("li a").style.color="green";
//adding and removing class in JS
document.querySelector("h1").classList.add("huge");
document.querySelector("h1").classList.remove("huge");

//Manipulate Attributes
// document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.facebook.com");
