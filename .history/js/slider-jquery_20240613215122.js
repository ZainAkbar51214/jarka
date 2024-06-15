$(document).ready(function(){
  $('.my-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
  });
});

$(document).ready(function(){
  $('.my-slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
  });
});


// Ratting javascript

  document.querySelectorAll('#star').forEach(star => {
    star.addEventListener('mouseover', animateStart);
    star.addEventListener('mouseout', animateEnd);
    star.addEventListener('click', set) 
  })
  
  function animateStart(e) { 
   const index = e.target.getAttribute('data-index')
    for(let i = 0; i <= index; i++){ e.target.parentNode.children[i].classList.add('animated')
    }
   
  }
  function animateEnd(e) { 
    const index = e.target.getAttribute('data-index')
    for(let i = 0; i <= index; i++){ e.target.parentNode.children[i].classList.remove('animated')
    }
  }
  function set(e) {
     const index = e.target.getAttribute('data-index');
    for(let i = 0; i <= 4; i++){ 
       e.target.parentNode.children[i].classList.remove('active')
    }
    for(let i = 0; i <= index; i++){ e.target.parentNode.children[i].classList.add('active')
    }
  }

  // add cart Js
  var thumbnails = document.getElementById("thumbnails")
  var imgs = thumbnails.getElementsByTagName("img")
  var main = document.getElementById("main")
  var counter=0;

  for(let i=0;i<imgs.length;i++){
    let img=imgs[i]
    
    
    img.addEventListener("click",function(){
    main.src=this.src
  })
  
}


// add cart Count Js
$(document).ready(function() {

  // ------------ Counter BEGIN ------------ 
  $(".counter__increment, .counter__decrement").click(function(e)
  {
    var $this = $(this);
    var $counter__input = $(this).parent().find(".counter__input");
    var $currentVal = parseInt($(this).parent().find(".counter__input").val());

    //Increment
    if ($currentVal != NaN && $this.hasClass('counter__increment'))
    {
      $counter__input.val($currentVal + 1);
    }
    //Decrement
    else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
    {
      if ($currentVal >= 1) {
        $counter__input.val($currentVal - 1);
      }
    }
  });
  // ------------ Counter END ------------ 

});

// shoping Category js
  // Define an object to map images to categories
  const products = {
    "paper-bag-teas": [
        { src: "img/Bones _ Joints Tea .jpeg", alt: "Bones & Joints Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Constipation Tea 2.jpeg", alt: "Constipation Tea", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/Dry cough_ Sore throat  _ swollen lymth Tea .jpeg", alt: "Dry Cough, Sore Throat & Swollen Lymph Tea", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Feet arthritis Tea.jpg", alt: "Feet Arthritis Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Feet Arthritis White bag.jpg", alt: "Feet Arthritis White Bag", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/Glowing skin Tea .jpeg", alt: "Glowing Skin Tea", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Hay Fever Relief Tea .JPG", alt: "Hay Fever Relief Tea", brand: "Brand Name", stars: 4, price: "£7.99" }
        // Add more products as needed
    ],
    "clear-back": [
        { src: "img/Keeps getting ill _ Tincture .jpeg", alt: "Keeps Getting Ill Tincture", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Peaceful sleep Tincture Lids.jpeg", alt: "Peaceful Sleep Tincture", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/Anti-hyperactivity _ Concentration Tincture Kids.jpg", alt: "Anti-hyperactivity & Concentration Tincture for Kids", brand: "Brand Name", stars: 5, price: "£7.99" }
        // Add more products as needed
    ],
    "tincture": [
        { src: "img/High blood pressure Tea.jpg", alt: "High Blood Pressure Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Insomnia Tea .jpg", alt: "Insomnia Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Menstrual cramps Tea.JPG", alt: "Menstrual Cramps Tea", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/Muiscle grow Tea in a white bag.jpg", alt: "Muscle Growth Tea in White Bag", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Psoriasios Tea in white bag.jpg", alt: "Psoriasis Tea in White Bag", brand: "Brand Name", stars: 4, price: "£7.99" }
        // Add more products as needed
    ],
    "oral-sprays": [
        { src: "img/Sleepwalking Tea .jpeg", alt: "Sleepwalking Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Antidepressant Oral spray.jpg", alt: "Antidepressant Oral Spray", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Anxiety _ Panic attacks oral spray.jpeg", alt: "Anxiety & Panic Attacks Oral Spray", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/Back pain _ Muscle relaxant Oral Spray.jpg", alt: "Back Pain & Muscle Relaxant Oral Spray", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Deep Immunity Oral spray.jpg", alt: "Deep Immunity Oral Spray", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Erectile dysfunction Oral spray.jpg", alt: "Erectile Dysfunction Oral Spray", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/FHay fever relief.jpg", alt: "Hay Fever Relief Oral Spray", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Healthy cells oral spray.jpg", alt: "Healthy Cells Oral Spray", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/High blood presure Oral spray.jpg", alt: "High Blood Pressure Oral Spray", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Lungs Health Oral spray.JPG", alt: "Lungs Health Oral Spray", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Eyesight Tea .JPG", alt: "Eyesight Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Menopause Tea .JPG", alt: "Menopause Tea", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Period pain Tea .JPG", alt: "Period Pain Tea", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/Varicose Veins Tea.JPG", alt: "Varicose Veins Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/Women's Health Tea .JPG", alt: "Women's Health Tea", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/Alzheimer's _ Dementia Tea.JPG", alt: "Alzheimer's & Dementia Tea", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/WhatsApp Image 2024-06-12 at 6.39.54 PM.jpeg", alt: "WhatsApp Image", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/whatsapp 2.jpeg", alt: "WhatsApp 2", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/whatsapp 3.jpeg", alt: "WhatsApp 3", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/whatsapp 4.jpeg", alt: "WhatsApp 4", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/whatsapp 5.jpeg", alt: "WhatsApp 5", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/whatsapp 6.jpeg", alt: "WhatsApp 6", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/whatsapp 7.jpeg", alt: "WhatsApp 7", brand: "Brand Name", stars: 3, price: "£7.99" },
        { src: "img/whatsapp 8.jpeg", alt: "WhatsApp 8", brand: "Brand Name", stars: 5, price: "£7.99" },
        { src: "img/whatsapp 9.jpeg", alt: "WhatsApp 9", brand: "Brand Name", stars: 4, price: "£7.99" },
        { src: "img/whatsapp 10.jpeg", alt: "WhatsApp 10", brand: "Brand Name", stars: 3, price: "£7.99" }
        // Add more products as needed
    ]
};

// Function to generate HTML for each product
function generateProductHTML(product) {
    return `
        <div class="col-lg-3 col-md-4 shop-review-col">
            <div class="box text-center">
                <div class="d-flex justify-content-center slider-product">
                    <img src="${product.src}" alt="${product.alt}">
                </div>
                <h6>${product.alt}</h6>
                <p>${product.brand}</p>
                <div class="star">
                    ${Array.from({ length: 5 }, (_, index) => `<div id="star" class="${index < product.stars ? 'active' : 'inactive'}" data-index=${index}>★</div>`).join('')}
                </div>
                <p>${product.price}</p>
                <a href="add-cart.html" class="btn btn-primary btn-all">Add to cart</a>
            </div>
        </div>
    `;
}

// Function to populate products into respective sections
function populateProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const productsList = products[category];
    if (!productsList) return;

    const productsHTML = productsList.map(product => generateProductHTML(product)).join('');
    container.innerHTML = productsHTML;
}

// Event listener for category select change
const categorySelect = document.getElementById('category');
categorySelect.addEventListener('change', function() {
    const selectedCategory = this.value;

    // Hide all product sections
    document.querySelectorAll('.shop-product-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show only the selected category
    document.getElementById(selectedCategory).style.display = 'block';

    // Populate products for the selected category
    populateProducts(selectedCategory, selectedCategory);
});

// Initially populate products for the default selected category
const defaultCategory = categorySelect.value;
populateProducts(defaultCategory, defaultCategory);