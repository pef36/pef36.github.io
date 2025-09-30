// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
//   document.writeln(arr[i],"<br>");
// }
var webmaps =
[
  ["Oil Spill Toolkit", "https://www.glo.texas.gov", "The oil spill toolkit developed by Enterprise Technology Solutions is neat."],
  ["Texas Ecosystems Analytical Mapper", "https://tpwd.texas.gov/gis/team/", "The Texas Parks and Wildlife's Landscape Ecology program is great."]
];
function welcome()
  {
    let a="Please enter your name.";
    let b= "Type you name here.";
// A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());
function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
