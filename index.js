let posters = document.querySelectorAll(".row__posters");
 
posters.forEach((item) => {
  // console.log(item);
  item.addEventListener("mouseover", function () {
    item.classList.add("largeImg");
  });
  item.addEventListener("mouseout", function () {
    item.classList.remove("largeImg");
  });
});