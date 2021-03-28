<template>
    <div class="main-page">
        <NavBar/>
        <ProductCard/>        
    </div>
</template>

<script>
import NavBar from '../navigation/NavBar.vue'
import ProductCard from '../cards/ProductCard.vue'
export default {
    name: 'MainPage',
    components: {
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