import {BaseService} from './BaseService';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export class AuthService extends BaseService {
  async signIn(data: SignInData) {
    try {
      const response = await this.post('/auth/signin', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async signUp(data: SignUpData) {
    try {
      const response = await this.post('/auth/signup', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService(); 