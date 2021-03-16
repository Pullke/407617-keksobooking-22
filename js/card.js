import {createPromoList} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const featureType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const createCard = (createPromoList) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardFeatures = cardElement.querySelector('.popup__features');
  const cardPhotos = cardElement.querySelector('.popup__photos');
  const photo = cardElement.querySelector('.popup__photo');

  const generateFeatures = () => {
    cardFeatures.innerHTML = '';
    createPromoList.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + createPromoList.offer.features[i]);
      cardFeatures.appendChild(feature);
    });
  };

  const generatePhotos = () => {
    cardPhotos.innerHTML = '';
    createPromoList.offer.photos.forEach((item, i) => {
      photo.src = createPromoList.offer.photos[i];
      cardPhotos.appendChild(photo.cloneNode(true));
    });
  };

  cardElement.querySelector('.popup__title').textContent = createPromoList.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = createPromoList.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = createPromoList.offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = featureType[createPromoList.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = createPromoList.offer.rooms + ' комнаты для ' + createPromoList.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + createPromoList.offer.checkin + ', выезд до ' + createPromoList.offer.checkout;
  cardElement.querySelector('.popup__description').textContent = createPromoList.offer.description;
  cardElement.querySelector('.popup__avatar').src = createPromoList.author.avatar;
  generateFeatures();
  generatePhotos();

  return cardElement;
};

createPromoList;
export {createCard};
