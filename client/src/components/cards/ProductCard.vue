<template>
    <div class="product-card">
        <div class="card">
            <img src="../../assets/img1.png" alt="#">
            <p>{{product.name}}</p>
            <p>Цена: {{product.price}}</p>
            <p>Количество: {{product.count}}</p>
            <button v-on:click="addClicked">Добавить в корзину</button>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductCard',
    props: ['product'],
    computed: {
        ...mapGetters([
            'USER_ID'
        ])
    },
    methods: {
        ...mapActions([
            'ADD_TO_BASKET'
        ]),
        addClicked() {
            let data = {
                user_id: this.USER_ID,
                product_id: this.product.id
            }
            this.ADD_TO_BASKET(data)
        }
    }
}
</script>
<style>
.product-card {
    width: 300px;
}
.card {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    align-items: flex-start;
}
img {
    width: 300px;
    height: 300px;
}
</style>