<template>
    <div class="products-page">
        <Navigation/>
        <Products/>
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation'
import Products from '../lists/Products'
export default {
    name: 'ProductsPage',
    components: {
        Navigation,
        Products
    }
}
</script>

<style>
.products-page {
    max-width: 1920px;
    width: 100%
}
</style>