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
function filterProducts() {
  let category = document.getElementById('categoryFilter').value;
  let products = document.querySelectorAll('.category');
  products.forEach(product => {
      if (category === 'all') {
          product.style.display = 'block';
      } else {
          product.style.display = product.classList.contains(category) ? 'block' : 'none';
      }
  });
}