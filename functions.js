

var correct = function()
{
  var p = document.createElement("p");
  p.innerText="Correct!";
  header.after(p);
}

var incorrect = function()
{
  var p = document.createElement("p");
  p.innerText="Incorrect..."
  header.after(p);
}
