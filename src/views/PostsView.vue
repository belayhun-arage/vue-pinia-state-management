<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostState} from '../stores/posts'

const {posts,post,loading,error} = storeToRefs(usePostState);
const {fetchPosts} = usePostState() 

fetchPosts();

</script>

<template>
    <main>
        <p v-if="loading">loading posts...</p>
        <p v-if="error">{{error.message}}</p>
        <p v-for="post in posts" :key="post.postId">
            <RouterLink :to="`/post/${post.postId}`">{{post.title}}</RouterLink>
            <p>{{post.body}}</p>
        </p>
    </main>
</template>