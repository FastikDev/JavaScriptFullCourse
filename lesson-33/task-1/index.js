//algo
//@input {string} ; output {undefined}
//1.get dom element for button, input, field for user info +
//2. add EventListener for button +
//3. get value from input in button EventListener +
//4. make a request to the server
//4.1 make func for request
//5. get json info from request
//6. filter this json
//7. set filtered fields to the required dom elements

const btnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input')

const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const avatarElem = document.querySelector('.user__avatar');

const defoulttAvatar = 'https://avatars3.githubusercontent.com/u10001';
avatarElem.src = defoulttAvatar;

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(responce => responce.json());
}

const renderUserDate = userDate => {
    console.log(userDate);
    const { avatar_url, name, location } = userDate;
    nameElem.textContent = name;
    avatarElem.src = avatar_url;
    locationElem.textContent = location
        ? `from ${location}`
        : '';
}

const onSearchUser = () => {
    const userName = inputElem.value;
    fetchUserData(userName)
    .then(userData => renderUserDate(userData));
};

btnElem.addEventListener('click', onSearchUser);

