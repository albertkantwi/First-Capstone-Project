document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('.nav-menu');
  const humburger = document.querySelector('.open-menu');
  const closeIcon = document.querySelector('.close-icon');

  function toggleNavbarMenus() {
    navMenu.classList.toggle('show');
    humburger.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  humburger.addEventListener('click', () => {
    toggleNavbarMenus();
  });

  closeIcon.addEventListener('click', () => {
    toggleNavbarMenus();
  });
});

const speakers = [
  {
    id: 0,
    name: 'Dora Azundem',
    image: './images/doraa-a.jpeg',
    details: 'Top fashion model',
    description: 'Azundem a is top fashion model and critics, she is pashionate about creativity and morden styles and innovation. She has many years experince in modeling and has work some top fashion brands',
  },
  {
    id: 1,
    name: 'Noah Zegeh',
    image: './images/noah.jpeg',
    details: 'Fashion designer, Static Africa',
    description: 'Noah is fashion designer with many years of experince, enthusiasm and cretivity for creative dress-making and moden design and styles. He is a top best desiner at Static Africa',
  },
  {
    id: 2,
    name: 'Dora Coffie',
    image: './images/dora-c.jpeg',
    details: "Fashion designer, KIBI's Klothing",
    description: 'Dora is a top fashion designer and a model, She has many years experince and has created some top fashion designs, her work include some famous African Kaftan',
  },
  {
    id: 3,
    name: 'Filicia Coffie',
    image: './images/felli.jpg',
    details: "Top fashion designer, NoFel's Clothing",
    description: 'Filicia is a top fashion designer, with pashion for creativity and morden styles and innovation. She has many years experince and has created some top fashion designs',
  },
  {
    id: 4,
    name: 'Emmanuel Akron',
    image: './images/collins.jpeg',
    details: 'Top Shoe designer',
    description: "Emmanuel is a shoe maker and designer, with many years experince and has created some top shoe designs. His work include Centric Shoa one of Africa's top shoe brand",
  },
  {
    id: 5,
    name: 'Catherine Owusu',
    image: './images/kate.jpeg',
    details: 'Top fashion designer',
    description: 'Catherine is a top fashion designer and the head of Northern Fashion Union, a famous fashion designers group in northern part of Ghana. She has many years experince and has created some top fashion designs',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const speakersCard = document.getElementById('speaker-works');
  const seeMoreButton = document.querySelector('.see-more');
  const seeLessButton = document.querySelector('.see-less');

  function showAllCards() {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach((card) => {
      card.style.display = 'block';
    });
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'none';
  }

  function handleButtonVisibility() {
    if (window.innerWidth <= 768) {
      seeMoreButton.style.display = 'block';
      seeLessButton.style.display = 'none';
    } else {
      seeMoreButton.style.display = 'none';
      seeLessButton.style.display = 'none';
      showAllCards();
    }
  }

  handleButtonVisibility();

  window.addEventListener('resize', handleButtonVisibility);

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-work');

    if (i >= 2) {
      speakerCard.classList.add('hidden-works');
    }

    speakerCard.innerHTML = `
    <div class="speaker-work">
      <div class="speaker-image">
        <img src="${speakers[i].image}" alt='Speaker Image'>
      </div>
      <div class="speaker-details">
        <h3>${speakers[i].name}</h3>
        <span>${speakers[i].details}</span>
        <p>${speakers[i].description}</p>
      </div>
    </div>
  `;

    speakersCard.appendChild(speakerCard);
  }

  seeMoreButton.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.hidden-works');
    hiddenCards.forEach((card) => {
      card.style.display = 'block';
    });
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'block';
  });

  seeLessButton.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.hidden-works');
    hiddenCards.forEach((card) => {
      card.style.display = 'none';
    });
    seeMoreButton.style.display = 'block';
    seeLessButton.style.display = 'none';
  });
});