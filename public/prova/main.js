rowEl = document.querySelector(".row");

axios.get("http://127.0.0.1:3002/posts")
.then(response => {
    console.log(response);
    response.data.lista.forEach(element => {
        let urlImg = element.img;
        let urlTitle = element.titolo;
        let urldesc = element.contenuto;
        let urlTags = element.tags;
        const card = document.createElement("div");
        card.classList.add("col-md-5");
        card.innerHTML = `
                <div class="card mb-5">
                    <img src="${urlImg}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${urlTitle}</h5>
                      <p class="card-text">${urldesc}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${urlTags.map(tag => `<li class="list-group-item">${tag}</li>`).join('')}
                    </ul>
                </div>
                    `
        rowEl.appendChild(card);
        
    });
})