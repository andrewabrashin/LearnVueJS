import { createStore } from 'vuex'
import postsStore from './posts';
import userStore from './user';

export default createStore({
    modules: {
        user: userStore,
        posts: postsStore,
    },
});