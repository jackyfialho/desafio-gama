import axios from 'axios';

class CepService {
  request = axios.create();

  async getAddress(cep) {
    const data = await this.request.get(
      `https://viacep.com.br/ws/${cep}/json/`,
    );
    return data;
  }
}

export const cepService = new CepService();
