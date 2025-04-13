import axios from 'axios'

const baseUrl: string = import.meta.env.VITE_BASE_API_URL
const apiKey: string = import.meta.env.VITE_TMDB_API_KEY

export class BaseService {
  protected api;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Automatically attach API key to every request
    this.api.interceptors.request.use((config) => {
      config.params = config.params || {}
      config.params['api_key'] = apiKey
      return config
    })
  }

  protected async get(url: string, params?: any) {
    return this.api.get(url, { params })
  }

  protected async post(url: string, data?: any) {
    return this.api.post(url, data)
  }

  protected async put(url: string, data?: any) {
    return this.api.put(url, data)
  }

  protected async delete(url: string) {
    return this.api.delete(url)
  }
}
