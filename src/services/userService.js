import axios from 'axios';

class UserService {
  request = axios.create();

  async registerUser(formUser) {
    console.log(formUser);
    try {
      const user = await axios.post('http://localhost:5000/register', formUser);
      if (user.status === 200) {
        alert('Usuário criado com sucesso');
      }
    } catch (error) {
      alert(error);
    }
  }
}

export const userService = new UserService();
