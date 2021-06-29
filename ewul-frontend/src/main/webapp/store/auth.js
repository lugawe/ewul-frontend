export const state = () => ({
  isLoggedIn: false,
  user: {
    id: null,
    roles: [],
    properties: {}
  }
});

export const mutations = {
  login(state, user) {
    if (user) {
      state.isLoggedIn = true;
      state.user.id = user.id;
      state.user.roles = user.roles;
      state.user.properties = user.properties;
    }
  },
  logout(state) {
    state.isLoggedIn = false;
    state.user.id = null;
    state.user.roles = [];
    state.user.properties = {};
  }
};
