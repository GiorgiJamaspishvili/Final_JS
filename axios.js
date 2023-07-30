'use strict';
// Filter + Data.AXIOS

let result = document.getElementById("result");
let inputFilter = document.getElementById("filter");
let listItems = [];

axios
  .get("https://api.punkapi.com/v2/beers")
  .then((responseData) => {
    responseData.data.forEach((item) => {
let li = document.createElement('li');


let pName = document.createElement("p");
        pName.textContent = `${item.name}`;

        let pName2 = document.createElement("p");
        pName2.textContent = `${item.first_brewed}`;

        let imgUser = document.createElement("img");
        imgUser.src = `${item.image_url}`;
        imgUser.classList.add("user-image");

        filter.style.outline = "none";
        // li.style.border = "solid 2px red";
        // li.style.borderRadius = '20px';
        li.style.justifyContent = 'space-between';

        li.appendChild(pName);
        li.appendChild(pName2);
        li.appendChild(imgUser);

        listItems.push(li);
        console.log(listItems);

        result.appendChild(li);

    })
  });

  function filterData(searchItem) {
    listItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }
  
  inputFilter.addEventListener("keyup", function (event) {
    filterData(event.target.value);
  });

