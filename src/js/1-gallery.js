import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: new URL('../img/hokkaido-flower.svg', import.meta.url).href,
    original: new URL('../img/hokkaido-flower.svg', import.meta.url).href,
    description: 'Hokkaido Flower',
  },
  {
    preview: new URL('../img/container-freight.svg', import.meta.url).href,
    original: new URL('../img/container-freight.svg', import.meta.url).href,
    description: 'Container Haulage Freight',
  },
  {
    preview: new URL('../img/aerial-beach.svg', import.meta.url).href,
    original: new URL('../img/aerial-beach.svg', import.meta.url).href,
    description: 'Aerial Beach View',
  },
  {
    preview: new URL('../img/flower-blooms.svg', import.meta.url).href,
    original: new URL('../img/flower-blooms.svg', import.meta.url).href,
    description: 'Flower Blooms',
  },
  {
    preview: new URL('../img/alpine-mountains.svg', import.meta.url).href,
    original: new URL('../img/alpine-mountains.svg', import.meta.url).href,
    description: 'Alpine Mountains',
  },
  {
    preview: new URL('../img/mountain-lake.svg', import.meta.url).href,
    original: new URL('../img/mountain-lake.svg', import.meta.url).href,
    description: 'Mountain Lake Sailing',
  },
  {
    preview: new URL('../img/spring-meadows.svg', import.meta.url).href,
    original: new URL('../img/spring-meadows.svg', import.meta.url).href,
    description: 'Alpine Spring Meadows',
  },
  {
    preview: new URL('../img/nature-landscape.svg', import.meta.url).href,
    original: new URL('../img/nature-landscape.svg', import.meta.url).href,
    description: 'Nature Landscape',
  },
  {
    preview: new URL('../img/lighthouse-coast.svg', import.meta.url).href,
    original: new URL('../img/lighthouse-coast.svg', import.meta.url).href,
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
