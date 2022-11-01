// add and remove class of search box for show and hide
let iconsInNavBar = document.querySelector(".iconsInNavBar");
let searchboxInNav = document.querySelector(".searchboxInNav");
let searchInNavBar = document.querySelector("#searchInNavBar");

// function for toggle class
let toggleClassForSearchBoxFunction = (e) => {
  iconsInNavBar.classList.toggle("hideSearchBoxInNav");

  if (iconsInNavBar.classList.contains("hideSearchBoxInNav")) {
    searchboxInNav.style.overflow = "hidden";
  } else {
    setTimeout(() => {
      searchboxInNav.style.overflow = "unset";
    }, 200);
  }
};

searchInNavBar.addEventListener("click", toggleClassForSearchBoxFunction);

// scroll and get navigation bar on upper side and another things......
let socialMediaAndPhoneOnTop = document.querySelector(
  ".socialMediaAndPhoneOnTop"
);
let navigationbar = document.querySelector(".navigationbar");

// total height for show navbar
let totalHeightForShowScrollBAr =
  socialMediaAndPhoneOnTop.clientHeight + navigationbar.clientHeight;

// go to top button.......
let goToTop = document.getElementById("goToTop");

// containerOfAllInMid means navbar
let containerOfAllInMid = document.querySelector(".containerOfAllInMid");

window.addEventListener("scroll", (e) => {
  let scrollY = this.scrollY;
  // console.log(scrollY)
  if (scrollY >= totalHeightForShowScrollBAr) {
    containerOfAllInMid.classList.add("colntrolNavigationBarWithSlide");
    goToTop.style.display = "flex";
    setTimeout(() => {
      goToTop.style.opacity = "1";
    });
  } else {
    containerOfAllInMid.classList.remove("colntrolNavigationBarWithSlide");
    goToTop.style.opacity = "0";
    setTimeout(() => {
      goToTop.style.display = "none";
    });
  }
});

goToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// main slider is here................
let containerMainSlider = document.querySelector(".containerMainSlider");
let containerOfmainSliderContents = document.querySelector(
  ".containerOfmainSliderContents"
);

let firstChildOfcontainerOfmainSliderContents;
let lastChildOfcontainerOfmainSliderContents;

// function starts in html
// -1 = clicked on right arrow; 1 = clicked on left arrow
let oneOrMinusOneInMainSlider2 = 0;

function arrowClickFunctionMainSlider(oneOrMinusOneInMainSlider) {
  let childrensWidthIncontainerOfmainSliderContents =
    containerOfmainSliderContents.firstElementChild.clientWidth;
  firstChildOfcontainerOfmainSliderContents =
    containerOfmainSliderContents.firstElementChild;
  lastChildOfcontainerOfmainSliderContents =
    containerOfmainSliderContents.lastElementChild;
  oneOrMinusOneInMainSlider2 = oneOrMinusOneInMainSlider;

  if (oneOrMinusOneInMainSlider == -1) {
    containerOfmainSliderContents.style.left =
      -childrensWidthIncontainerOfmainSliderContents + "px";
  } 
  else if (oneOrMinusOneInMainSlider == 1) {
    containerOfmainSliderContents.style.left =
      childrensWidthIncontainerOfmainSliderContents + "px";
  }

  let arrowcontainerMainSlider = document.querySelectorAll(
    ".arrowcontainerMainSlider"
  );
  for (const iterator of arrowcontainerMainSlider) {
    iterator.style.pointerEvents = "none";
    setTimeout(() => {
      iterator.style.pointerEvents = "auto";
    }, 2300);
  }
}

let apendAndPrependTheChildElementsInMainSliderFunction = () => {
  if (oneOrMinusOneInMainSlider2 == -1) {
    containerOfmainSliderContents.style.transition = "0s";
    containerOfmainSliderContents.style.left = "0";
    setTimeout(() => {
      containerOfmainSliderContents.style.transition = ".8s ease-out";
    });
    containerOfmainSliderContents.appendChild(
      firstChildOfcontainerOfmainSliderContents
    );
  } else if (oneOrMinusOneInMainSlider2 == 1) {
    containerOfmainSliderContents.style.transition = "0s";
    containerOfmainSliderContents.style.left = "0";
    setTimeout(() => {
      containerOfmainSliderContents.style.transition = ".8s ease-out";
    });
    containerOfmainSliderContents.prepend(
      lastChildOfcontainerOfmainSliderContents
      );
      console.log('preped')
  }

  let mainSliderContent = document.querySelectorAll(".mainSliderContent ");

  setTimeout(() => {
    
    for (const iterator of mainSliderContent) {
      iterator.classList.add("changePositionClassForSlider");
    }
  
    mainSliderContent[1].classList.remove("changePositionClassForSlider");
  }, );
  

};

apendAndPrependTheChildElementsInMainSliderFunction();
containerOfmainSliderContents.addEventListener(
  "transitionend",
  apendAndPrependTheChildElementsInMainSliderFunction
);



// making featured products slider..........

let buttonForFeaturedProductSlide = document.getElementsByClassName(
  "buttonForFeaturedProductSlide"
);
// container of featured products who shows them
let showingFeaturedProducts = document.querySelector(
  ".showingFeaturedProducts"
);
let showingFeaturedProductsWidth = showingFeaturedProducts.clientWidth;
let containerOfFeaturedProductsBoxes = document.querySelector(
  ".containerOfFeaturedProductsBoxes"
);

Array.from(buttonForFeaturedProductSlide).forEach((element, index) => {
  element.addEventListener("click", () => {
    containerOfFeaturedProductsBoxes.style.left =
      -(index * showingFeaturedProducts.offsetWidth) + "px";
      

    for (const iterator of buttonForFeaturedProductSlide) {
      // remove or add class (.changeColorOfSlideButtonFeaturedProducts) for change style of button
      iterator.classList.remove("changeColorOfSlideButtonFeaturedProducts");
    }

    element.classList.add("changeColorOfSlideButtonFeaturedProducts");
  });
});

// making grabable slider for sale products...
let showingSaleProducts = document.querySelector(".showingSaleProducts");
let containerOfSaleProductsBoxes = document.querySelector(
  ".containerOfSaleProductsBoxes"
);

let imageAndIconOfFeaturedProductImg = document.querySelectorAll(
  ".imageAndIconOfFeaturedProduct img"
);
for (const iterator of imageAndIconOfFeaturedProductImg) {
  iterator.setAttribute("draggable", false);
}

let sliderSaleProductis = false;
let sliderSaleProduct;

showingSaleProducts.addEventListener("mousedown", (e) => {
  sliderSaleProductis = true;
  sliderSaleProduct = e.clientX - containerOfSaleProductsBoxes.offsetLeft;
  // console.log(e.clientX,'-', containerOfSaleProductsBoxes.offsetLeft, "=", sliderSaleProduct)

  showingSaleProducts.style.cursor = "grabbing";
});

showingSaleProducts.addEventListener("mousemove", (e) => {
  if (sliderSaleProductis == false) {
    return;
  }
  e.preventDefault();
  containerOfSaleProductsBoxes.style.left =
    e.clientX - sliderSaleProduct + "px";
  // console.log(e.clientX ,'-', sliderSaleProduct, '=', containerOfSaleProductsBoxes.style.left,'left')

  if (
    containerOfSaleProductsBoxes.getBoundingClientRect().right <
    showingSaleProducts.getBoundingClientRect().right
  ) {
    containerOfSaleProductsBoxes.style.left =
      -(
        containerOfSaleProductsBoxes.offsetWidth -
        showingSaleProducts.offsetWidth
      ) + "px";
  }

  if (containerOfSaleProductsBoxes.style.left > "0px") {
    containerOfSaleProductsBoxes.style.left = "0px";
  }
});

window.addEventListener("mouseup", () => {
  sliderSaleProductis = false;
  showingSaleProducts.style.cursor = "grab";
});

// top products in one box sliders.....
let showingDivForColumnsInTopProductsReal = document.querySelector(
  ".showingDivForColumnsInTopProductsReal"
);
let containerOfProductsColumnsInTopProducts = document.querySelectorAll(
  ".containerOfProductsColumnsInTopProducts"
);
let containerOfProductsColumnsInTopProductsFirst =
  containerOfProductsColumnsInTopProducts[0];

// funcitnon starts in html..

// function for sale product in top product
let slideCountForSaleProduct = 0;
function slideSaleProductInTopProductFunction(x) {
  slideCountForSaleProduct += x;

  if (
    slideCountForSaleProduct >
    containerOfProductsColumnsInTopProductsFirst.children.length - 1
  ) {
    slideCountForSaleProduct = 0;
  }

  if (slideCountForSaleProduct < 0) {
    slideCountForSaleProduct =
      containerOfProductsColumnsInTopProductsFirst.children.length - 1;
  }

  containerOfProductsColumnsInTopProductsFirst.style.left =
    -(
      showingDivForColumnsInTopProductsReal.offsetWidth *
      slideCountForSaleProduct
    ) + "px";
}

// function for new arrival..
let containerOfProductsColumnsInTopProductsSecond =
  containerOfProductsColumnsInTopProducts[1];

let slideCountForNewArrival = 0;
function slideNewArrivalInTopProductFunction(y) {
  slideCountForNewArrival += y;

  if (
    slideCountForNewArrival >
    containerOfProductsColumnsInTopProductsSecond.children.length - 1
  ) {
    slideCountForNewArrival = 0;
  }

  if (slideCountForNewArrival < 0) {
    slideCountForNewArrival =
      containerOfProductsColumnsInTopProductsSecond.children.length - 1;
  }

  containerOfProductsColumnsInTopProductsSecond.style.left =
    -(
      showingDivForColumnsInTopProductsReal.offsetWidth *
      slideCountForNewArrival
    ) + "px";
}

// function for Top Rate..
let containerOfProductsColumnsInTopProductsThird =
  containerOfProductsColumnsInTopProducts[2];

let slideCountForTopRate = 0;
function slideTopRateInTopProductFunction(z) {
  slideCountForTopRate += z;

  if (
    slideCountForTopRate >
    containerOfProductsColumnsInTopProductsThird.children.length - 1
  ) {
    slideCountForTopRate = 0;
  }

  if (slideCountForTopRate < 0) {
    slideCountForTopRate =
      containerOfProductsColumnsInTopProductsThird.children.length - 1;
  }

  containerOfProductsColumnsInTopProductsThird.style.left =
    -(
      showingDivForColumnsInTopProductsReal.offsetWidth * slideCountForTopRate
    ) + "px";
}


// making slider with buttons for from the blog.................
let showingFromTheBlogElements = document.querySelector('.showingFromTheBlogElements')
let buttonForFromTheBlogslide = document.querySelectorAll('.buttonForFromTheBlogslide');
let sliderContainerOfFromTheBlogElements = document.querySelector('.sliderContainerOfFromTheBlogElements')

Array.from(buttonForFromTheBlogslide).forEach((element,index)=>{
  element.addEventListener('click', ()=>{
    sliderContainerOfFromTheBlogElements.style.left = -(showingFromTheBlogElements.offsetWidth * index) + 'px';

    for (const iterator of buttonForFromTheBlogslide) {
      iterator.classList.remove('changeColorOfSlideButtonFromTheBlog')
    }

/* addingclass(.changeColorOfSlideButtonFromTheBlog) for add style on buttons */
    element.classList.add('changeColorOfSlideButtonFromTheBlog')

  })
})


// making brand logos grabable slider......
let showOtherBrands = document.querySelector('.showOtherBrands')
let slideContainerOfBrands = document.querySelector('.slideContainerOfBrands')

let brandLogoImg = document.querySelectorAll('.brandLogo a img')
for (const iterator of brandLogoImg) {
  
  iterator.setAttribute("draggable", false)
}


let slidelogosDiv = false;
let slideWidthCalculate;





showOtherBrands.addEventListener('mousedown', (e)=>{
  e.preventDefault()
  slideWidthCalculate = e.clientX - slideContainerOfBrands.offsetLeft;
  

  slidelogosDiv = true;
});

showOtherBrands.addEventListener('mousemove', (e)=>{
  if(slidelogosDiv == false){
    return
  }
  
  

  slideContainerOfBrands.style.left = (e.clientX - slideWidthCalculate) + 'px';
  
  if(slideContainerOfBrands.getBoundingClientRect().right < showOtherBrands.getBoundingClientRect().right){
    slideContainerOfBrands.style.left = -(slideContainerOfBrands.offsetWidth - showOtherBrands.offsetWidth) + 'px'
  }

  if(slideContainerOfBrands.style.left > '0px'){
    slideContainerOfBrands.style.left = '0px'
  }

})


window.addEventListener('mouseup', ()=>{
  slidelogosDiv = false;
})

// making addable class(.hideMenuItems) for style in menu button
let headingMenuList = document.querySelector('.headingMenuList')
let menuBars = document.querySelector('#menuBars');

menuBars.addEventListener('click', ()=>{
  headingMenuList.classList.toggle('hideMenuItems')
})

// plus in menu....
let plusOrMinusInNavBar= document.querySelectorAll('.plusOrMinusInNavBar');
let menHoverEffect = document.querySelector('.menHoverEffect2 ')
let ladiesHoverEffect = document.querySelector('.ladiesHoverEffect2')

plusOrMinusInNavBar.forEach((element,index) => {
  element.addEventListener('click',()=>{
    if(element.classList.contains('fa-plus')){

      element.classList.remove('fa-plus')
      element.classList.add('fa-minus')
    }
    else{
      element.classList.add('fa-plus')
      element.classList.remove('fa-minus')

    }

    if(index == 0){
      // toggle class(.menHoverEffectWithPlus) for show menhover effect
      menHoverEffect.classList.toggle('menHoverEffectWithPlus')
      
    }
    
    else if(index == 1){
      // toggle class(.ladiesHoverEffectWithPlus) for show ladieshover effect
      ladiesHoverEffect.classList.toggle('ladiesHoverEffectWithPlus')

    }
  })
  
});


