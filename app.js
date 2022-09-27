// // asign elements
// //console.log(gallery);
// // const galleryHeader    = document.querySelector(".galleryHeader");
// const galleryContainer = document.querySelector(".galleryContainer");
// // Gallery Header

// //console.log(headerGallery);
// // function generateGalleryHeader(headerGallery) {
   
// //     headerGallery.forEach(header => {
// //         let headerOne = document.createElement('h1');
// //         headerOne.classList.add("galleryTitle");
// //         header.innerText = header.title;

// //         let headerDiv = document.createElement('div');
// //         headerDiv.classList.add("gallerySubtitle");

// //         let headerParagraph       = document.createElement('p');
// //         headerParagraph.innerText = header.subTitle;
// //         headerDiv.appendChild(headerParagraph);
// //     });
// //     galleryHeader.append(headerOne, headerDiv);

// // }
// // generateGalleryHeader(headerGallery);

// // Gallery Container
// function generateGallery(columns, galleryImages) {
//     galleryContainer.innerHTML = '';

//     //     //console.log(galleryImages);

//     //     // Store all column arrays which contain the relevant gallery images
//     let galleryColumnWrappers = {};

//     //     // create column item array and add this to colomnWrapper
//     for (let i = 0; i < columns; i++) {
//         galleryColumnWrappers[`column${i}`] = [];
//     }

//     //      //console.log(galleryImages.length);

//     //      //console.log(galleryColumnWrappers);

//     for (let i = 0; i < galleryImages.length; i++) {
//         const column = i % columns;
//         galleryColumnWrappers[`column${column}`].push(galleryImages[i]);
//     }
//     //      // console.log(galleryColumnWrappers);

//     for (let i = 0; i < columns; i++) {
//         let columnGallaryImages = galleryColumnWrappers[`column${i}`];
//         let columns = document.createElement('div');
//         columns.classList.add('galleyColumn');

//         columnGallaryImages.forEach(galleryImage => {
//             let galleryFigure = document.createElement('figure');
//             // galleryFigure.attributes('tabindex', 0);
//             // galleryFigure.attributes('role', "button");
//             let image = document.createElement('img');
//             image.src = galleryImage.image;
//             image.alt = galleryImage.caption;

//             let caption = document.createElement('figcaption');
//             caption.innerText = galleryImage.caption;
//             galleryFigure.append(image, caption);
//             columns.appendChild(galleryFigure);
//         });

//         galleryContainer.appendChild(columns);
//     }
//     //       //console.log(columnGallaryImages);
// }

// generateGallery(4, gallery);


// let previousScreenSize = window.innerWidth;

// //console.log(previousScreenSize);

//  window.addEventListener('resize', () => {
//     if (window.innerWidth < 600 && previousScreenSize >= 600) {
//         generateGallery(1, gallery);
//     }
//     else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
//         generateGallery(2, gallery);
//     } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
//         generateGallery(4, gallery);
//     }
//     previousScreenSize = window.innerWidth;
//  });

// // if(previousScreenSize < 600){
// //     generateGallery(1, gallery);
// // }else if(previousScreenSize >= 600 && previousScreenSize < 1000){
// //     generateGallery(2, gallery);
// // }else{
// //     generateGallery(4, gallery);
// // }



