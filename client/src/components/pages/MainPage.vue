<template>
    <div class="main-page">
        <Navigation/>
        <Products/>        
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue'
import Products from '../lists/Products'
export default {
    name: 'MainPage',
    components: {
        Navigation,
        Products
    }
}
</script>

<style>
.main-page{
    display: flex;
    flex-direction: column;
    max-width: 1920px;
    width: 100%;
}
</style>