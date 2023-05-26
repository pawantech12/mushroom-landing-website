let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
hamburgerbtn.addEventListener("click", () => {
  hamburgerbtn.classList.toggle("active");
  nav_list.classList.toggle("active");
});



const testimonials = [
  {
    name: "Mandala Jokie",
    job: "CEO of Creative HUB",
    image: "images/man1.png",
    para: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles."
  },
  {
    name: "Raj Malik",
    job: "CEO of Mushroom",
    image: "images/man1.png",
    para: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles."
  },
  {
    name: "George Jans",
    job: "CEO of Shopee",
    image: "images/man1.png",
    para: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles."
  },
  {
    name: "Iris Fran",
    job: "CEO of Campno",
    image: "images/man1.png",
    para: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles."
  },
  {
    name: "Robert manuar",
    job: "Owner Of Mangas",
    image: "images/man1.png",
    para: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles."
  },
  {
    name: "Vicky Chaurasia",
    job: "CEO of Aura",
    image: "images/man1.png",
    para: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles."
  }
];

// current testimonial slide 
let i = 0;

// total testimonial slide
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");

let nextbtn  = document.getElementById("next");
let prevbtn  = document.getElementById("prev");

nextbtn.addEventListener("click", () => {
  i = (j+i+1)%j;
  displaycard();
})
prevbtn.addEventListener("click", () => {
  i = (j+i-1)%j;
  displaycard();
})

displaycard = () => {
  testimonialContainer.innerHTML = `<div class="card">
  <div class="quote">
      <i class="bi bi-quote"></i>
  </div>
  <p>${testimonials[i].para}</p>
  <hr>
  <div class="footer">
      <div class="profile">
          <img src=${testimonials[i].image} alt="">
      </div>
      <div class="description">
          <h5>${testimonials[i].name}</h5>
          <small>${testimonials[i].job}</small>
          <div class="rating">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
          </div>
      </div>
  </div>
</div>`
}
window.onload = displaycard;

