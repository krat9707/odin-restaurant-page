let JapaneseCuisine = [
    {
      "name": "Sukiyaki",
      "japaneseName": "すき焼き",
      "price": "$150",
      "description": "A luxurious Japanese hot pot dish where thinly sliced beef is simmered alongside tofu, vegetables, and noodles in a rich, savory-sweet soy-based broth."
    },
    {
      "name": "Kaiseki",
      "japaneseName": "懐石料理",
      "price": "$300",
      "description": "An exquisite multi-course dining experience that showcases seasonal ingredients and masterful culinary techniques, often served in a traditional and serene setting."
    },
    {
      "name": "Sushi",
      "japaneseName": "寿司",
      "price": "$200",
      "description": "Delicate hand-pressed vinegared rice topped with the freshest slices of premium fish, creating a harmonious balance of flavors and textures."
    },
    {
      "name": "Wagyu Beef",
      "japaneseName": "和牛",
      "price": "$250",
      "description": "A melt-in-your-mouth experience featuring the highest quality Japanese beef, known for its exquisite marbling and unparalleled tenderness."
    },
    {
      "name": "Unagi no Kabayaki",
      "japaneseName": "うなぎの蒲焼",
      "price": "$180",
      "description": "Succulent grilled eel glazed with a sweet and savory sauce, served over a bed of steaming rice, offering a delectable combination of rich flavors."
    },
    {
      "name": "Tempura",
      "japaneseName": "天ぷら",
      "price": "$120",
      "description": "Lightly battered and deep-fried seafood and vegetables, delivering a delightful crunch and a burst of natural flavors in every bite."
    },
    {
      "name": "Sashimi",
      "japaneseName": "刺身",
      "price": "$220",
      "description": "Expertly sliced raw fish and seafood, presented with meticulous artistry, allowing the pristine quality and pure taste of each ingredient to shine."
    },
    {
      "name": "Omakase",
      "japaneseName": "おまかせ",
      "price": "$350",
      "description": "A bespoke dining experience where the chef curates a personalized multi-course meal, highlighting the finest seasonal ingredients and culinary expertise."
    },
    {
      "name": "Shabu-Shabu",
      "japaneseName": "しゃぶしゃぶ",
      "price": "$160",
      "description": "An interactive hot pot dish where thinly sliced meat and vegetables are quickly swished through a pot of boiling broth, then dipped in flavorful sauces."
    },
    {
      "name": "Fugu",
      "japaneseName": "ふぐ",
      "price": "$400",
      "description": "A rare and delicate delicacy made from the potentially lethal pufferfish, meticulously prepared by skilled chefs to ensure a safe and sublime dining experience."
    },
  ];

function menuPage() {

    const menuContainer = document.createElement('div');    
    menuContainer.classList.add('menu-container');

    displayCards(JapaneseCuisine, menuContainer);

    document.querySelector('#content').appendChild(menuContainer);   
}

function displayCards(menu, menuContainer) {
    menu.forEach((dish, index) => {

        let card = document.createElement('div');
        card.classList.add('menu-card');
    
        let cardTitle = document.createElement('div');
        cardTitle.classList.add('menu-card-title');
        cardTitle.innerHTML = `${dish.name} (${dish.japaneseName})`;
        card.appendChild(cardTitle);

        let cardDetails = document.createElement('div');
        cardDetails.classList.add('menu-card-details');

            let cardPrice = document.createElement('div');
            cardPrice.classList.add('menu-card-price');
            cardPrice.innerHTML = 'Price: ' + dish.price;
            cardDetails.appendChild(cardPrice);

            let cardDescription = document.createElement('div');
            cardDescription.classList.add('menu-card-description');
            cardDescription.innerHTML = dish.description;
            cardDetails.appendChild(cardDescription);
      
        card.appendChild(cardDetails);

        let cardButton = document.createElement('button');
        cardButton.classList.add('menu-card-button', 'button');
        cardButton.innerText = 'Order Now';
        card.appendChild(cardButton);

        menuContainer.appendChild(card);
    });             
}

export { menuPage, JapaneseCuisine, displayCards};