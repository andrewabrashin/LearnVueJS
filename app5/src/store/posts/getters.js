export default {
    count (state) {
        return state.posts.length;
    },
    all (state) {
        return state.posts;
    },
    newsPosts(state) {
        return state.posts.filter(post => post.type === 'news');
    },  
    postById (state) {
        return (id) => state.posts.find(item => item.id === id);
    }
}