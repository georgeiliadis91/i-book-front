import axios from 'axios';

interface IApiConfig {
	baseURL?: string;
	headers?: {
		Authorization?: string;
	};
}

// TODO fix the API calls
class API {
	constructor(private config: IApiConfig = {}) {
		this.config.baseURL =
			this.config.baseURL || process.env.REACT_APP_BOOK_API_TESTING;
		console.log('url',  process.env.REACT_APP_BOOK_API_TESTING);
	}

	public async get(url: string): Promise<any> {
		try {
			const response = await axios.get(url, this.config);
			return response.data;
		} catch (err) {
			// TODO Create handle error utility
			console.log(err);
		}
	}
	public async post(url: string, data: any = {}): Promise<any> {
		try {
			const response = await axios.post(url, data, this.config);
			return response.data;
		} catch (err) {
			// TODO Create handle error utility
			console.log(err);
		}
	}
	public async put(url: string, data: any = {}): Promise<any> {
		try {
			const response = await axios.put(url, data, this.config);
			return response.data;
		} catch (err) {
			// TODO Create handle error utility
			console.log(err);
		}
	}

	public async delete(url: string, data: any = {}): Promise<any> {
		try {
			const response = await axios.delete(url, {
				...this.config,
				data: { ...data },
			});
			return response.data;
		} catch (err) {
			// TODO Create handle error utility
			console.log(err);
		}
	}
}

export { API };
