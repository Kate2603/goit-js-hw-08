// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItems(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href=${item.original}>
                <img class="gallery__image" src=${item.preview} alt=${item.description} />
                </a>`
    )
    .join('');
}

const insertGalleryItems = string => {
  gallery.insertAdjacentHTML('beforeend', string);
};

insertGalleryItems(createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
console.log(galleryItems);
