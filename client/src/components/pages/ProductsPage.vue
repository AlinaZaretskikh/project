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

</style>