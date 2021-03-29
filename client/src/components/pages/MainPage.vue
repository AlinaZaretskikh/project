<template>
    <div class="main-page">
        <Navigation/>
        <ProductCard/>        
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue'

import ProductCard from '../cards/ProductCard.vue'
export default {
    name: 'MainPage',
    components: {
        Navigation,
        
        ProductCard
    }
}
</script>

<style>
.main-page{
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>