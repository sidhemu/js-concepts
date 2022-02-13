// const KEY = "debounce-terms";
//
// let init = function () {
//   // document.getElementById("txt-search").addEventListener("input", search);
//   document
//     .getElementById("txt-search")
//     .addEventListener("input", efficientSearch);
//   let terms = [
//     "apple",
//     "acorn",
//     "bee",
//     "beef",
//     "beet",
//     "bunney",
//     "cookie",
//     "corn",
//     "corndog",
//     "dog",
//     "dogma",
//     "echo",
//     "elephant",
//   ];
//
//   localStorage.setItem(KEY, JSON.stringify(terms));
// };
// let search = function (ev) {
//   let text = ev.target.value;
//   document.getElementById("output").textContent = `List Matching ${text}
//   `;
//   let ul = document.getElementById("matches");
//
//   getList(text)
//     .then((list) => {
//       ul.innerHTML = "";
//
//       if (list.length === 0) {
//         let li = document.createElement("li");
//         li.textContent = "NO MATCHES";
//         ul.appendChild(li);
//       } else {
//         list.forEach((item) => {
//           let li = document.createElement("li");
//           li.textContent = item;
//           ul.appendChild(li);
//         });
//       }
//     })
//     .catch((err) => console.warn(err));
// };
//
// let getList = function (txt) {
//   return new Promise((resolve, reject) => {
//     let r = Math.floor(Math.random() * 1000);
//     setTimeout(
//       function () {
//         let t = "^" + this.toString();
//         let pattern = new RegExp(t, "i");
//         let terms = JSON.parse(localStorage.getItem(KEY));
//         let matches = terms.filter((term) => pattern.test(term));
//         console.log("matches", matches);
//         resolve(matches);
//       }.bind(txt),
//       r
//     );
//   });
// };
//
// let debounce = function (func, wait, immediate) {
//   let timeout;
//   return function () {
//     let context = this,
//       args = arguments;
//     let later = function () {
//       timeout = null;
//       if (!immediate) {
//         func.apply(context, args);
//       }
//     };
//
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// };
// let efficientSearch = debounce(function (ev) {
//   let text = ev.target.value;
//   document.getElementById("output").textContent = `List Matching ${text}
//   `;
//   let ul = document.getElementById("matches");
//
//   getList(text)
//     .then((list) => {
//       ul.innerHTML = "";
//
//       if (list.length === 0) {
//         let li = document.createElement("li");
//         li.textContent = "NO MATCHES";
//         ul.appendChild(li);
//       } else {
//         list.forEach((item) => {
//           let li = document.createElement("li");
//           li.textContent = item;
//           ul.appendChild(li);
//         });
//       }
//     })
//     .catch((err) => console.warn(err));
// }, 300);
//
// document.addEventListener("DOMContentLoaded", init);

fetch("http://starlord.hackerearth.com/kickstarter")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log("data ==== ", data);
  });
