let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__exit');
let popup = document.querySelector('.popup');

closePopup.addEventListener('click', function () {
    popup.classList.add('popup-none')
    });
    openPopup.addEventListener('click', function () {
        popup.classList.remove('popup-none')
        });

let like = document.querySelectorAll('.element__like');

like.forEach((elem) => elem.addEventListener('click',
function () {
    if (elem.classList.contains('element__like')){
        elem.classList.add('element__like_active')
        elem.classList.remove('element__like')
    }
    else{
        elem.classList.add('element__like')
        elem.classList.remove('element__like_active')
    }
}));

document.querySelector('.popup__button').onclick = myClick;
function myClick () {
    let name = document.getElementById('name').value;
document.querySelector('.profile__name').innerHTML = name;
    let description = document.getElementById('description').value;
document.querySelector('.profile__description').innerHTML = description;
return false;
}