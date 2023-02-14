import { defineStore } from 'pinia'
import { usePostStore } from './posts'

// define the author store
export default useAuthorStore = defineStore({
    id:'authors',

    state:()=>{
        authors:[]
    },

    getters:{
       getAuthors:(state) => {
        const postStore = usePostStore();
        return state.authors.filter((post) => post.authorId === postStore.authorId);
       }
    },

    actions:{
        async fethAuthors(){
            this.authors = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response=>response.json());
        }
    }
})