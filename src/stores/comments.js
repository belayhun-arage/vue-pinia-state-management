import {defineStore} from 'pinia'
import  {usePostStore} from './posts'

// define the comment store
export default useCommentStore = defineStore({
    id:'comment',
    state: () => ({
        comments:[],
    }),
    getters: {
        getPostComments:(state) => {
            const postStore = usePostStore();
            return state.comments.filter((post) => post.postId === postStore.postId);
        }
    },
    actions: {
        async fetchComments(){
            this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response=>response.json());
        },

    }
})