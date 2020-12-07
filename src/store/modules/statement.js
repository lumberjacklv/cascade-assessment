import fakeData from '../../data/statement.json';

export default {
  namespaced: true,
  state: {
    statement: {},
  },
  actions: {
    fetchStatement: ({ commit }) => {
      commit('UPDATE_STATEMENT', fakeData.Statement);
    },
  },
  mutations: {
    UPDATE_STATEMENT: (state, data) => {
      state.statement = data;
    },
  },
  getters: {
    statement: (state) => state.statement,
  },
};
