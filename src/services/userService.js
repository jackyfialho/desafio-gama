import axios from 'axios';
const baseUrl = '';

class UserService {
  request = axios.create({
    baseURL: baseUrl,
  });

  async saveUser(user) {
    const data = await this.request.get('');
    return data;
  }
}

export const userService = new UserService();
