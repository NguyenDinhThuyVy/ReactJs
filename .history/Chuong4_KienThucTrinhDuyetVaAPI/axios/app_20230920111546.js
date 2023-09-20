const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
xhttp.send;
