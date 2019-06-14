

function makeRequest(method, url, body) {
    return new Promise((res, rej) => {
        const req = new XMLHttpRequest();
        req.open(method, url);

        req.send(body);
        req.onload = () => {
            if (req.status >= 200 && req.status <= 299) {
                res(req);
            }
            else { reject(new Error("Rejected")); }
        }
    })
}

const getAllTitles = () => {
    let req = new XMLHttpRequest();
    req.onload = function () {
        let res = document.getElementById("getAllTitles");
        res.innerHTML = req.responseText;
    }
    req.open("GET", "http://www.omdbapi.com/?t=superman&apikey=fcfa066c")
    req.send();


    sessionStorage.setItem('return', res);

    const x = sessionStorage.getItem('return');

    console.log(x);
}




sessionStorage.setItem('return', res);

const x = sessionStorage.getItem('return');

console.log(x);



// t=title;
// y=year;
// i=id;


// create table
// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }
// let table = document.querySelector("table");
// let data = Object.keys(mountains[0]);
// generateTableHead(table, data);
