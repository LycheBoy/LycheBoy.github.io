/* This is the first step in building a complete we applications.

Why use Local Storage over browser cookies?.

Local storage bypasses web browser cookie blockers.

Local storage area(Over 5mb) compared to cookies(4kb).

Local Storage is more secure than cookies because the data is stored on the user's computer and not transmitted to the server.

Local Storage can set to expire after he session is complete

Local Storage is a way to pass values from one page o another because JavaScript clears all variables
*/

function enterName() {
  var c = document.getElementById('userName').value;

  localStorage.setItem('uName',c);
  location.href = "two.html";
}

function enterName() {
  var v = document.getElementById('userName2').value;
  window.alert(v)
}
