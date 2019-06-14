

function makeRequest(method, url, body) {
  return new Promise((res, rej) => {
    const req = new XMLHttpRequest();
    req.open(method, url);

    req.send(body);
    req.onload = () => {
      if (req.status >= 200 && req.status <= 299) {
        res(req);
      }
      else {reject(new Error("Rejected")); }
    }
  })
}


const getAllAccounts = () => {
  let req = new XMLHttpRequest();
  req.onload = function () {
    let res = document.getElementById("getAllAccounts");
    res.innerHTML = req.responseText;
    child();
  }
  req.open("GET", "weburl-changethis")
  req.send();
}