function createCard(img_src, title_text,body_text) {
  // create elements
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mx-auto");
  card.style.width = "auto";
  card.style.height = "100%";
  
  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = img_src;
  card.appendChild(img);
  
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);
  
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = title_text;
  cardBody.appendChild(title);
  
  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = body_text;
  cardBody.appendChild(text);
  
  return card;
}


function createRowCards(n_cards, dataCards){

    const row = document.createElement("div");
    row.classList.add("row");

    for(let i=0; i<n_cards; i++){
      const div_card = document.createElement("div");
      div_card.classList.add("mx-auto");
      switch(n_cards){
        case 2: div_card.classList.add("col-md-6"); break;
        case 3: div_card.classList.add("col-md-4"); break;
        case 4: div_card.classList.add("col-md-3"); break;
        case 6: div_card.classList.add("col-md-2");break;
      }
      const card = createCard(
        "../Imagenes/"+dataCards[i].img,    
        dataCards[i].title,
        dataCards[i].text);
      div_card.appendChild(card);
      row.appendChild(div_card);
    }

    return row
}

function createColCards(n_cards){

  const row = document.createElement("div");
  row.classList.add("col");
  

  for(let i=0; i<n_cards; i++){
    const div_card = document.createElement("div");
    div_card.classList.add("mx-auto");
    switch(n_cards){
      case 2: div_card.classList.add("row-md-6"); break;
      case 3: div_card.classList.add("row-md-4"); break;
      case 4: div_card.classList.add("row-md-3"); break;
      case 6: div_card.classList.add("row-md-2");break;
    }
    const card = createCard(
      "https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp",    
      "c1",
      "ejemplo texto");
    card.classList.add("margin-div");
    div_card.appendChild(card);
    row.appendChild(div_card);
  }

  return row
}

