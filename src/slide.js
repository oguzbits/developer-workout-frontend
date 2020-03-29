let imgArray = ["images/iStock-1144531918.jpg", "images/iStock-1157345255.jpg"],
  curIndex = 0,
  imgDuration = 8000;

export function slideShow() {
  document.getElementById("image1").src = imgArray[curIndex];
  curIndex++;
  if (curIndex == imgArray.length) {
    curIndex = 0;
  }
  setTimeout(slideShow, imgDuration);
}