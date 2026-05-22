// https://dadata.ru/
// https://dadata.ru/api/suggest/address/
// селект с автодополнением из dadata,
// debounce
// отмена не актуальных запросов

let firstInput = document.getElementsByName("autocompletter")[0];
firstInput.addEventListener(
	"input",
	debounce((event) => onChange(event.target.value)),
);
let addressList = document.getElementById("address");
let prevFetch = false;
let controller;

function debounce(func, timeout = 1000) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

function onChange(v) {
	if (controller) controller.abort();
	controller = new AbortController();
	onFetch(v, controller.signal);
}

function onFetch(query, signal) {
	console.log("fetch..");
	var url =
		"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
	var token = API_KEY; // import { API_KEY } from "./const.js"; // enter your OWN api key
	var options = {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: "Token " + token,
		},
		body: JSON.stringify({ query: query }),
		signal: signal,
	};
	fetch(url, options)
		.then((response) => response.json())
		.then((result) => {
			addressList.innerHTML = null;
			result.suggestions.map((v) => {
				let optionElement = document.createElement("option");
				optionElement.value = v.unrestricted_value;
				addressList.appendChild(optionElement);
			});
		})
		.catch((error) => console.log("error", error));
}

// const input = document.getElementById("search");

// let timer;

// input.addEventListener("input", (e) => {
//   const query = e.target.value;

//   clearTimeout(timer);

//   timer = setTimeout(() => {

//     fetch(`/api/search?q=${encodeURIComponent(query)}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Request error");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, 500);
// });

// const input = document.getElementById("search");

// const debouncedFetch = debounce((query) => {
//   fetch(`/api/search?q=${encodeURIComponent(query)}`)
//     .then(res => res.json())
//     .then(data => console.log(data));
// }, 500);

// function onChange(e) {
// 	debouncedFetch(e.target.value);
// }

// input.addEventListener("input", onChange);

// function debounce(func, timeout = 500) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }
