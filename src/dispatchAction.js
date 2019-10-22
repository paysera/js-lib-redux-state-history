export default (store, action, payload = {}) => setTimeout(() => store.dispatch(action(payload)));
