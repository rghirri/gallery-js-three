// asign elements
//console.log(gallery);
const galleryContainer = document.querySelector(".galleryContainer");

function generateGallery(columns, galleryImages){
    galleryContainer.innerHTML = '';

    //console.log(galleryImages);

    // Store all column arrays which contain the relevant gallery images
    let galleryColumnWrappers = {};

    // create column item array and add this to colomnWrapper
    for(let i =0; i < columns; i++) {
        galleryColumnWrappers[`column${i}`] = [];
    }

     //console.log(galleryImages.length);

     //console.log(galleryColumnWrappers);

    for(let i = 0; i < galleryImages.length; i++) {
        const column = i % columns;
        galleryColumnWrappers[`column${column}`].push(galleryImages[i]);
    }
     // console.log(galleryColumnWrappers);
    
    for (let i = 0; i < columns; i++) {
        let columnGallaryImages = galleryColumnWrappers[`column${i}`];
        let columns = document.createElement('div');
        columns.classList.add('galleyColumn');

        columnGallaryImages.forEach(galleryImage => {
            let galleryFigure = document.createElement('figure');
            // galleryFigure.attributes('tabindex', 0);
            // galleryFigure.attributes('role', "button");
            let image = document.createElement('img');
            image.src = galleryImage.image;
            image.alt = galleryImage.caption;
            
            let caption = document.createElement('figcaption');
            caption.innerText = galleryImage.caption;
            galleryFigure.append(image, caption);
            columns.appendChild(galleryFigure);
        })

        galleryContainer.appendChild(columns);
    }
      //console.log(columnGallaryImages);
}
generateGallery(4, gallery);
