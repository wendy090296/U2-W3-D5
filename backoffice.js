//  CREAZIONE DEI PRODOTTI

// seleziono gli elementi della pagina
const form = document.getElementById("mat-form");
const nameField = document.getElementById("name-product");
const descField = document.getElementById("description-product");
const brandField = document.getElementById("brand-product");
const imageField = document.getElementById("img-product");
const priceField = document.getElementById("price-product");

const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzk4MzE4N2U1YzAwMTgxNGM2MGIiLCJpYXQiOjE3MDU2NTQ2NjAsImV4cCI6MTcwNjg2NDI2MH0.m-VyEN7IXjkDAMHBVXposQro0DvmHebCNkYTneFVaOQ";

const myUrl = "https://striveschool-api.herokuapp.com/api/product/"; // endpoint principale

// evito che la pagina si aggiorni  per non perdere i dati inseriti e poi raccolgo i dati stessi

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newProduct = {
    name: nameField.value,
    description: descField.value,
    brand: brandField.value,
    imageUrl: imageField.value,
    price: priceField.value,
  };
  console.log(newProduct);

  // imposto la fetch() con metodo POST
  const createProduct = function (newProduct) {
    fetch(myUrl, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        Authorization: myToken,
        "Content-Type": "application/json", // in origine il body é un oggetto
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data);
        alert("Il nuovo prodotto é stato aggiunto correttmente!");
        location.assign("./myshop.html");
      })
      .catch((err) => {
        console.log("Errore nella richiesta", err);
      });
  };
});
