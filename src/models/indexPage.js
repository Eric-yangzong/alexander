export default {
    namespace: 'indexpage',
    state: [],
    reducers: {
      'login'(state, { payload: id }) {
        console.log('login')
        return state.filter(item => item.id !== id);
      },
    },
  }