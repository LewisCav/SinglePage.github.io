function selectPage(selectedlink)
{
  var pages = [document.getElementById("homecontainer"), document.getElementById("portcontainer"),
  document.getElementById("blogcontainer"), document.getElementById("aboutcontainer"),
  document.getElementById("contactcontainer"),];
  for ( i = 0; i < pages.length; i++) 
  {
    pages[i].style.display = "none";
  }
  document.getElementById(selectedlink).style.display = "block";
}

