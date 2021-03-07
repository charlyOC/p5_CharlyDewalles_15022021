
fetch('http://localhost:3000/api/furniture')
.then((response) => response.json())
.then((response) => {

  

for (let i = 0; i < response.length; i++) {
  
  const cardFurniture = document.getElementById('meubles');

  const etiquette = document.createElement('a');
  etiquette.setAttribute('class', 'etiquette_product');
  etiquette.setAttribute('href', 'produit.html')

  let name = document.createElement('h2');
  name.setAttribute('class', 'name_product');

  let image = document.createElement('img');
  image.setAttribute('class', 'image_product');
  image.setAttribute('src', (response[i].imageUrl));

  let prix = document.createElement('h3');
  prix.setAttribute('class', 'price_product');

  let id = document.createElement('p');
  id.setAttribute('class', 'id_product');

  let description = document.createElement('p');
  description.setAttribute('class', 'description');

  etiquette.appendChild(image);
  etiquette.appendChild(id);
  etiquette.appendChild(name);
  etiquette.appendChild(description);
  etiquette.appendChild(prix);
  cardFurniture.appendChild(etiquette);

  id.innerHTML = (response[i]._id);
  name.innerHTML = (response[i].name);
  prix.innerHTML = (response[i].price/100) + '€';
  description.innerHTML = (response[i].description)
  
    
}
});






