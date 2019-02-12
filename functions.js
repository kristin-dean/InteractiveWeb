

var correct1 = function()
{
  var p = document.createElement("p");
  p.innerText="Correct!";
  intro.after(p);
}

var incorrect1 = function()
{
  var p = document.createElement("p");
  p.innerText="Incorrect..."
  intro.after(p);
}
