// fetch() con GET

const myCards = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzk4MzE4N2U1YzAwMTgxNGM2MGIiLCJpYXQiOjE3MDU2NTQ2NjAsImV4cCI6MTcwNjg2NDI2MH0.m-VyEN7IXjkDAMHBVXposQro0DvmHebCNkYTneFVaOQ",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error();
      }
    })
    .then((data) => {
      console.log(data);
      myCards(data);

      // creo cards

      for (let i = 0; i < data.length; i++) {
        const myDiv = document.createElement("div");
        myDiv.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-3");
        const row = document.getElementById("row");
        myDiv.innerHTML = ` <div class="card">
        <img src="${data[i].imageUrl}" class="card-img-top" alt="fotoCover" />
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].description}</p>
          <a href="#" class="btn btn-success"><i class="bi bi-bag-plus me-2"></i>${data[i].price} euro</a>
          <a href="./details.html?cardId=${data[i]._id}" class="btn btn-info"><i class="bi bi-eyeglasses me-2 "></i>Dettagli</a>
        </div>
      </div>;
    `;
      }
      row.appendChild(myDiv);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};
