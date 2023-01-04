export default class UserInfo {
    constructor(userSelecotrs) {
      this._userName = document.querySelector(userSelecotrs.name);
      this._userDescription = document.querySelector(userSelecotrs.description);
    }
  
    getUserInfo() {
      this._userInfo = {
        name: this._userName.textContent,
        description: this._userDescription.textContent,
      };
  
      return this._userInfo;
    }
  
    setUserInfo(name, description) {
      this._userDescription.textContent = description;
      this._userName.textContent = name;
    }
  }