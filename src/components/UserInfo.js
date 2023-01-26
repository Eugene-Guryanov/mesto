export default class UserInfo {
    constructor(userSelectors) {
      this._userName = document.querySelector(userSelectors.name);
      this._userDescription = document.querySelector(userSelectors.description);
      this._userAvatar = document.querySelector(userSelectors.avatar);
    }
  
    fill({name, description, avatar, cohort, _id}) {
      this._name = name;
      this._description = description;
      this._avatar = avatar;
      this._cohort = cohort;
      this.id = _id;
    }

    getUserInfo() {
      return {
        name: this._userName.textContent,
        description: this._userDescription.textContent
      };
  
  
    }
  

    setUserInfo(data) {
      this._userName.textContent = data.name;
      this._userDescription.textContent = data.about
    }

    setUserAvatar() {
      this._userAvatar.src = this._avatar;
    }
  }