import axios from 'axios';

const instans = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4540bac3-6628-4c8b-b18f-83119f455ceb',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((respons) => respons.data);
  },
  getProfile(userId) {
    return instans.get(`profile/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`);
  },
};

export const authAPI = {
  getAuthStatus() {
    return instans.get(`auth/me`).then((respons) => respons.data);
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
