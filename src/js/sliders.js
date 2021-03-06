//SINGLE PRODUCT SLIDER

const singleProductSlider = {
  container: document.querySelector('.js-swiper-slider-single-product'),
  navigation: {
    next: document.querySelector('.js-swiper-slider-single-product__next'),
    prev: document.querySelector('.js-swiper-slider-single-product__prev'),
  },
};

const singleProductSliderConfig = {
  clickableState: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: singleProductSlider.navigation.next,
    prevEl: singleProductSlider.navigation.prev,
  },
};

const singleProductSwiper = new Swiper(singleProductSlider.container, singleProductSliderConfig);

//ACCESORIES SLIDER

const accessoriesSlider = {
  container: document.querySelector('.js-swiper-slider-accesories'),
  navigation: {
    next: document.querySelector('.js-swiper-slider-accesories__next'),
    prev: document.querySelector('.js-swiper-slider-accesories__prev'),
  },
};

const accessoriesSliderConfig = {
  clickableState: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: accessoriesSlider.navigation.next,
    prevEl: accessoriesSlider.navigation.prev,
  },
  breakpoints: {
    640: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
};

const accessoriesSwiper = new Swiper(accessoriesSlider.container, accessoriesSliderConfig);

//PRODUCTS SLIDER

const productsSlider = {
  container: document.querySelectorAll('.js-swiper-slider-products'),
  navigation: {
    next: document.querySelectorAll('.js-swiper-slider-products__next'),
    prev: document.querySelectorAll('.js-swiper-slider-products__prev'),
  },
};

const productsSliderConfig = {
  clickableState: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: productsSlider.navigation.next,
    prevEl: productsSlider.navigation.prev,
  },
  breakpoints: {
    640: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const productsSwiper = new Swiper(productsSlider.container, productsSliderConfig);

//BRANDS SLIDER

const brandsSlider = {
  container: document.querySelector('.js-swiper-slider-brands'),
  navigation: {
    next: document.querySelector('.js-swiper-slider-brands__next'),
    prev: document.querySelector('.js-swiper-slider-brands__prev'),
  },
};

const brandsSliderConfig = {
  clickableState: true,
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: brandsSlider.navigation.next,
    prevEl: brandsSlider.navigation.prev,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
    },
  },
};

const brandsSwiper = new Swiper(brandsSlider.container, brandsSliderConfig);

//BENEFITS SLIDER

const benefitsSlider = {
  container: document.querySelector('.js-swiper-slider-benefits'),
  navigation: {
    next: document.querySelector('.js-swiper-slider-benefits__next'),
    prev: document.querySelector('.js-swiper-slider-benefits__prev'),
  },
};

const benefitsSliderConfig = {
  clickableState: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: benefitsSlider.navigation.next,
    prevEl: benefitsSlider.navigation.prev,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

const benefitsSwiper = new Swiper(benefitsSlider.container, benefitsSliderConfig);
