<template>
    <div class="products">
        <ProductCard v-for="product in PRODUCTS" v-bind:key="product.id" v-bind:product="product"/>
    </div>
</template>
<script>
import ProductCard from '../cards/ProductCard'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Products',
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS'
        ])
    },
    mounted() {
        this.GET_PRODUCTS();
    }
}
</script>
<style>
.products {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
}
</style>