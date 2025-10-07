// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
//   document.writeln(arr[i],"<br>");
// }
// var webmaps =
// [
//   ["Oil Spill Toolkit", "https://www.glo.texas.gov", "The oil spill toolkit developed by Enterprise Technology Solutions is neat."],
//   ["Texas Ecosystems Analytical Mapper", "https://tpwd.texas.gov/gis/team/", "The Texas Parks and Wildlife's Landscape Ecology program is great."]
// ];

var webmaps =
[
  ["Oil Spill Toolkit", "https://www.glo.texas.gov"],
  ["The Oil Spill Toolkit developed by Enterprise Technology Solutions of The TexasGeneral Land Office is a decision-support resource. This is where I would write my second sentence about the Oil Spill Toolkit. This is where I would write my third sentence about the Oil Spill Toolkit. This is where I would write my fourth sentence about the Oil Spill Toolkit."],
  ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/"],
  ["The Texas Parks and Wildlife's Landscape Ecology program developed this application to deliver the Ecological Mapping Systems of Texas (EMS) data to Texas citizens. This is where I would write my second sentence about the Texas Ecosystems Analytical Mapper. This is where I would write my third sentence about the Texas Ecosystems Analytical Mapper (TEAM)."]
];
// {
//   if(row % 2==0) {
//     console.log();
//   } else {
//     console.log();
//   }
// }
function welcome()
{
    let a= "Please enter your name.";
    let b= "Type you name here.";
// A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());
// function webmap_table()
// {
//   document.write("<table width=100%>");
//   for (var row=0; row < webmaps.length; row++)
//   {
//     document.write("<tr>");
//     for (var column=0; column < webmaps[0].length; column++)
//     {
//       document.write("<td>" + webmaps[row][column] + "</td>");
//     }
//     document.write("</tr>");
//   }
//   document.write("</table>");
//   return "";
// }


function webmap_table() {
  document.write("<table width=100%>");
  for (var row = 0; row < webmaps.length; row++) {
    document.write("<tr>");
    if (row % 2 == 0) { // For even rows (0-based index)
      for (var column = 0; column < webmaps[row].length; column++) {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
    } else { // For odd rows
      document.write("<td colspan='2'>" + webmaps[row][0] + "</td>");
    }
    document.write("</tr>");
    if (row % 2 == 1) { // Only after the description rows
      document.write("<tr><td colspan='2'>&nbsp;</td></tr>");
    }
  }
  document.write("</table>");
  return "";
}
