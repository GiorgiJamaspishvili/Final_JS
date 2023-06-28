// 'use strict';



// const dataSlider = [
//     {
//       id: 1,
//       imageUrl: "https://lh3.googleusercontent.com/VJYq1ooOgCIDffdclIkC7s6qlP7VOrfqYNHgHvXRcsf8QJmqVaf1xG2QKW2ld95uhr_YvYbHIoNoLu-0C4o7LBRkcM518IMYYV8o1mg=h450-rw",
//       title: "Taste of Belgum",
//     },
  
//     {
//       id: 2,
//       imageUrl: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/beer-bar-glass-1296x728-header-1296x728.jpg?w=1155&h=1528",
//       title: "Taste of Germany",
//     },
  
//     {
//       id: 3,
//       imageUrl: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2019/02/Israeli-Beer.jpg?fit=1920%2C1080&ssl=1",
//       title: "Taste of Irelnd",
//     },
  
//     {
//       id: 4,
//       title: "Taste of Czech",
//       imageUrl: "https://www.datocms-assets.com/75079/1661498789-beercompare-stretch-crop.jpg?w=1600",
      
//     },
//   ];
  
  
//   const sliderContent = document.getElementById("slider_content");
//   const arrowLeft = document.getElementById("arrow_left");
//   const arrowRight = document.getElementById("arrow_right");
//   let sliderIndex = 0;
  
//   function createDivTag() {
//     let div = document.createElement("div");
//     return div;
//   }
  
//   function createImgTag(item) {
//     let tagImage = document.createElement("img");
//     tagImage.setAttribute("alt", `${item.title}`);
//     tagImage.setAttribute("src", `${item.imageUrl}`);
    
  
//     return tagImage;
//   }
//   function createTitle(item) {
//     let titleTag = document.createElement("h2");
//     titleTag.innerText = `${item.title}`;
  
//     return titleTag;
//   }
//   function slide() {
//     sliderContent.innerHTML = " ";
//     let slideItem = createDivTag();
//     let imgTag = createImgTag(dataSlider[sliderIndex]);
//     let h2Tag = createTitle(dataSlider[sliderIndex]);
  
//     slideItem.appendChild(imgTag);
//     slideItem.appendChild(h2Tag);
  
//     sliderContent.appendChild(slideItem);
//   }
  
//   function arrowLeftClick() {
//     if (sliderIndex == 0) {
//       sliderIndex = dataSlider.length - 1;
//       slide();
//       return;
//     }
//     sliderIndex -= 1;
//     slide();
//   }
  
//   function arrowRightClick() {
//     if (sliderIndex == dataSlider.length - 1) {
//       sliderIndex = 0;
//       slide();
//       return;
//     }
//     sliderIndex += 1;
//     slide();
//   }
  
//   arrowLeft.addEventListener("click", arrowLeftClick);
//   arrowRight.addEventListener("click", arrowRightClick);
  
//   setInterval(() => {
//     arrowRightClick();
//   }, 2000);
  
//   slide();




//   function slider() {
//     console.log('hello');
// }

// export {slider};