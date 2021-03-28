<template>
    <div class="main-page">
        <NavBar/>
        <Gallery/>        
    </div>
</template>

<script>
import NavBar from '../navigation/NavBar.vue'
import Gallery from '../gallery/Gallery'
export default {
    name: 'MainPage',
    components: {
        NavBar,
        Gallery
    }
}
</script>

<style>

</style>