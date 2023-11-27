/** Controll Image Caroussel **/

const initSlider = () => {
  const imageList = document.querySelector(
    '.carousel__track-container .carousel__track'
  );

  const trackButtons = document.querySelectorAll(
    '.carousel__track-container .carousel__button'
  );

  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Slide images according to the slide button clicks
  trackButtons.forEach(button => {
    button.addEventListener('click', () => {
      const direction = button.id === 'prev-button' ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction; //ClientWidth returns the viewable width of an element in pixels

      imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' }); //Number of pixels to scroll (horizontally). Positive values scroll to the right, negative values to the left.
    });
  });

  // Enable or disable slide buttons based on scroll position
  const handleTrackButtons = () => {
    // trackButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'flex';
    // trackButtons[1].style.display =
    //   imageList.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
    trackButtons[0].disable = imageList.scrollLeft <= 0 ? 'false' : 'true';
    trackButtons[1].disable =
      imageList.scrollLeft >= maxScrollLeft ? 'false' : 'true';
  };

  // Call this  function when image scroll button is clicked
  imageList.addEventListener('scroll', () => {
    handleTrackButtons();
  });
};

window.addEventListener('resize', initSlider);
window.addEventListener('load', initSlider);

/* ************************************************ */

const product = [
  {
    id: 0,
    image: 'src/img/brinco-pq-1.jpg',
    title: 'Buterfly earring',
    price: 120,
  },
  {
    id: 1,
    image: 'src/img/brinco-pq-2.jpg',
    title: 'Pearl earring',
    price: 60,
  },
  {
    id: 2,
    image: 'src/img/brinco-pq-3.jpg',
    title: 'Heart earring',
    price: 230,
  },
  {
    id: 3,
    image: 'src/img/colar-1.jpg',
    title: 'Small dots necklace',
    price: 100,
  },
  {
    id: 4,
    image: 'src/img/colar-2.jpg',
    title: 'Gold multy disk necklace',
    price: 230,
  },
  {
    id: 5,
    image: 'src/img/colar-3.jpg',
    title: 'Rainbow stones necklace',
    price: 100,
  },
  {
    id: 6,
    image: 'src/img/anel-1.jpg',
    title: 'Pearl ring',
    price: 60,
  },
  {
    id: 7,
    image: 'src/img/anel-2.jpg',
    title: 'ABC ring',
    price: 230,
  },
  {
    id: 8,
    image: 'src/img/pingente-1.jpg',
    title: 'Charm girl',
    price: 60,
  },
  {
    id: 9,
    image: 'src/img/pingente-2.jpg',
    title: 'Holy Spirit charm',
    price: 230,
  },
  {
    id: 10,
    image: 'src/img/pingente-3.jpg',
    title: 'Buterfly charm',
    price: 100,
  },
  {
    id: 11,
    image: 'src/img/pulseira-1.jpg',
    title: 'Sphere & pearl chain bracelet',
    price: 120,
  },
  {
    id: 12,
    image: 'src/img/pulseira-2.png',
    title: 'Little stars bracelet',
    price: 60,
  },
  {
    id: 13,
    image: 'src/img/pulseira-3.jpg',
    title: 'Sphere chain bracelet',
    price: 230,
  },
];

const categories = [
  ...new Set(
    product.map(item => {
      return item;
    })
  ),
];

//console.log(product);
//console.log(categories);

// document.getElementById('searchInput').addEventListener('keyup', e => {
//   const searchData = e.target.value.toLowerCase();
//   const filteredData = categories.filter(item => {
//     return item.title.toLowerCase().includes(searchData);
//   });

//   console.log(filteredData);
//   displayItem(filteredData);
// });

// const displayItem = items => {
//   document.getElementById('results-container').innerHTML = items
//     .map(item => {
//       var { image, title, price } = item;
//       return `<div class='box'>
//                         <div class='img-box'>
//                             <img class='images' src=${image}></img>
//                         </div>
//                         <div class='bottom'>
//                             <p>${title}</p>
//                             <h2>$ ${price}.00</h2>
//                         <button>Add to cart</button>
//                         </div>
//                     </div>`;
//     })
//     .join('');
// };
// displayItem(categories);

const btnClose = document.querySelectorAll('.close-btn');
const btnSearch = document.querySelectorAll('.search-btn');
const searchBox = document.querySelector('.search-results');
const btnMenu = document.querySelector('.menu-btn');

const clearContainer = container => {
  container.innerHTML = '';
};

document.getElementById('search-input').addEventListener('keyup', e => {
  if (e.target.value === '') {
    clearContainer(document.getElementById('results-container'));
    return;
  }

  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter(item => {
    return item.title.toLowerCase().includes(searchData);
  });

  // console.log(filteredData);
  displayItem(filteredData);
});

const displayItem = items => {
  const resultsContainer = document.getElementById('results-container');

  if (items.length === 0) {
    resultsContainer.innerHTML = '<p>No items found.</p>';
    return;
  }

  const itemHtml = items
    .map(item => {
      const { image, title, price } = item;
      return `<div class="product-item">
                  <a href="#" class="flex-row">
                    <div class="card"><img src=${image} alt="" class="product-img"></div>
                    <span class="product-title link-page">${title}</span>
                  </a>             
                </div>`;
    })
    .join('');

  // Add the "View All" element at the end
  const viewAllHtml = '<div ><a href="#" class="link-page">View All</a></div>';

  // Set the HTML content
  resultsContainer.innerHTML = itemHtml + viewAllHtml;
};

//displayItem(categories);

btnClose.forEach(button => {
  //console.log(btnClose);
  // console.log(btnClose[0]);
  button.addEventListener('click', e => {
    console.log(e.target.id);
    if (btnClose[0].id === e.target.id) {
      document.querySelector('.side-navigation').style.transform =
        'translate(-100%)';
    }
    if (btnClose[1].id === e.target.id) {
      const closeContent = e.target.closest('.close-this');
      closeContent.classList.toggle('hidden');
      clearContainer(document.getElementById('results-container'));
      document.getElementById('search-input').value = '';
    }
  });
});

btnSearch.forEach(button => {
  button.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    searchBox.classList.toggle('hidden');
    searchInput.focus();
    console.log('entrei aqui');
  });
});

btnMenu.addEventListener('click', () => {
  console.log('hello');
  //document.querySelector('.side-navigation').classList.toggle('hidden');
  document.querySelector('.side-navigation').style.transform = 'translate(0)';
});

// btnSearch.addEventListener('click', () => {
//   const searchInput = document.getElementById('search-input');
//   searchBox.classList.toggle('hidden');
//   searchInput.focus();
// });
