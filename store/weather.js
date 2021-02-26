export default {
  state: {
    weather: []
  },

  mutations: {
    updateWeathers(state, posts) {
      state.weather = posts;
    }
  },

  getters: {
    allPosts: state => {
      return state.posts;
    }
  },
  actions: {
    async fetchWeathers({ commit }, payload) {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=a172afd954836af09a7535b7a6e04147`
      );
      const posts = await res.json();
      console.log(posts);

      commit("updateWeathers", posts);
    }
  }
};
