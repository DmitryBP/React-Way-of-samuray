import axios from 'axios';

const instans = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4540bac3-6628-4c8b-b18f-83119f455ceb',
  },
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const respons = await instans.get(`users?page=${currentPage}&count=${pageSize}`);
    return respons.data;
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instans.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instans.put(`profile/status`, { status });
  },
};

export const authAPI = {
  async getAuthStatus() {
    const respons = await instans.get(`auth/me`);
    return respons.data;
  },

  logIn(email, password, rememberMe = false) {
    return instans.post(`auth/login`, { email, password, rememberMe });
  },
  logOut() {
    return instans.delete(`auth/login`);
  },
};

export const followAPI = {
  unfollowRequestedUser(id) {
    return instans.delete(`follow/${id}`);
  },
  followRequestedUser(id) {
    return instans.post(`follow/${id}`);
  },
};
