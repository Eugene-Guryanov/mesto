export default class UserInfo {
    constructor({name,description}) {
      this._userName = name;
      this._userDescription = description;
    }
  
    getUserInfo() {
      this._userInfo = {
        name: this._userName.textContent,
        description: this._userDescription.textContent,
      };
  
      return this._userInfo;
    }
  
    setUserInfo(jobInput, nameInput) {
      this._userDescription.textContent = jobInput.value;
      this._userName.textContent = nameInput.value;
    }
  }