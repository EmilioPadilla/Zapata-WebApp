import API from './api.service';

const login = async (body: string) => {
	return API.put('api/v1/entrance/login', {body: body})
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			} else {
				return null;
			}
		})
		.catch((error) => {
			return null;
		});
};

const logout = async (body: string) => {
	return API.get('api/v1/entrance/logout')
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			} else {
				return null;
			}
		})
		.catch((error) => {
			return null;
		});
};

const signup = async (body: string) => {
	return API.post('api/v1/entrance/signup')
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			} else {
				return null;
			}
		})
		.catch((error) => {
			return null;
		});
};

export const accountServices = {
	login,
	logout,
	signup
};
