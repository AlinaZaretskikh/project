<template>
    <div class="main-page">
        <Navigation/>
        <NavBar/>
        <ProductCard/>        
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue'
import NavBar from '../navigation/NavBar.vue'
import ProductCard from '../cards/ProductCard.vue'
export default {
    name: 'MainPage',
    components: {
        Navigation,
        NavBar,
        ProductCard
    }
}
</script>

<style>
.main-page{
    display: flex;
    flex-direction: column;
}
</style>