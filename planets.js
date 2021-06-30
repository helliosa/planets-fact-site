let requestURL = './data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var planetData = request.response;
  console.log(planetData);
  console.log(planetData[0]["overview"]["content"]);
}
