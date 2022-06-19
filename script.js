let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__exit');
let popup = document.querySelector('.popup');
let name = document.getElementById('name').value;
let like = document.querySelector('.element__like');
let description = document.getElementById('description').value;

closePopup.addEventListener('click', function () {
    popup.classList.add('popup-none')
    });
    openPopup.addEventListener('click', function () {
        popup.classList.remove('popup-none')
        });

like.addEventListener('click', function () {
    if (like.classList.contains('element__like')){
        like.classList.add('element__like_active')
        like.classList.remove('element__like')
    }
    else{
        like.classList.add('element__like')
        like.classList.remove('element__like_active')
    }
});

document.querySelector('.popup__button').onclick = myClick;
function myClick () {
document.querySelector('.profile__name').innerHTML = name;
document.querySelector('.profile__description').innerHTML = description;
return false;
}