// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
//   document.writeln(arr[i],"<br>");
// }
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
