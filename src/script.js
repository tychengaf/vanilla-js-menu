function getFilteredData(data, type) {
  const types = [
    'breakfast',
    'lunch',
    'shakes',
    'dinner',
  ]

  if (types.includes(type)) {
    return data.filter((food) => food.types.includes(type));
  }
  return data;
}

function getMenuHtml(data, type){
  const filteredData = getFilteredData(data, type);
  return filteredData.map((food) => {
    return `
      <div class="food-container">
        <img class="food-img" src="${food.imgUrl}"></img>
        <div class="text-container">
          <div class="title-container">
             <h4 class="name">${food.name}</h4>
             <h4 class="price">$${food.price}</h4>
          </div>
          <p class="description">${food.description}</p>
        </div>
      </div>
    `
  }).join('');
}

function loadMenuDom(data, type) {
  const menu = document.getElementById('menu');
  menu.innerHTML = getMenuHtml(data, type);
}


function handleButtonListener(id) {
  const button = document.getElementById(id);
  button.addEventListener('click', () => {
    loadMenuDom(data, id);
  });
}

const data = [
  {
    ordering: 1,
    name: 'Buttermilk Pancakes',
    price: 15.99,
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    imgUrl: '../images/item-1.jpeg',
    types: [
      'breakfast',
    ],
  },
  {
    ordering: 2,
    name: 'Diner Double',
    price: 13.99,
    description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    imgUrl: '../images/item-2.jpeg',
    types: [
      'lunch',
    ],
  },
  {
    ordering: 3,
    name: 'Godzilla Milkshake',
    price: 6.99,
    description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    imgUrl: '../images/item-3.jpeg',
    types: [
      'shakes',
    ],
  },
  {
    ordering: 4,
    name: 'Country Delight',
    price: 20.99,
    description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    imgUrl: '../images/item-4.jpeg',
    types: [
      'breakfast',
    ],
  },
  {
    ordering: 5,
    name: 'Egg Attack',
    price: 22.99,
    description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    imgUrl: '../images/item-5.jpeg',
    types: [
      'lunch',
    ],
  },
  {
    ordering: 6,
    name: 'Oreo Dream',
    price: 18.99,
    description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    imgUrl: '../images/item-6.jpeg',
    types: [
      'shakes',
    ],
  },
  {
    ordering: 7,
    name: 'Bacon Overflow',
    price: 8.99,
    description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    imgUrl: '../images/item-7.jpeg',
    types: [
      'breakfast',
    ],
  },
  {
    ordering: 8,
    name: 'American Classic',
    price: 12.99,
    description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    imgUrl: '../images/item-8.jpeg',
    types: [
      'lunch',
    ],
  },
  {
    ordering: 9,
    name: 'Quarantine Buddy',
    price: 16.99,
    description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    imgUrl: '../images/item-9.jpeg',
    types: [
      'shakes',
    ],
  },
  {
    ordering: 10,
    name: 'Steak Dinner',
    price: 39.99,
    description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    imgUrl: '../images/item-10.jpeg',
    types: [
      'dinner',
    ],
  },
]

handleButtonListener('all');
handleButtonListener('breakfast');
handleButtonListener('lunch');
handleButtonListener('shakes');
handleButtonListener('dinner');

loadMenuDom(data, 'all');
