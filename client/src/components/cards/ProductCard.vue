<template>
    <div class="product-card">
        <h1>Выгодные предложения</h1>
        <div class="cards">
            <div class="card">
                <img src="../../assets/img1.png" alt="#">
                <p>Наименование: {{product.name}}</p>
                <p>Цена: {{product.price}}</p>
                <p>Количество: {{product.count}}</p>
            </div>
            <div class="card">
                <img src="../../assets/img2.png" alt="#">
                <p>Наименование: {{product.name}}</p>
                <p>Цена: {{product.price}}</p>
                <p>Количество: {{product.count}}</p>
            </div>
            <div class="card">
                <img src="../../assets/img3.png" alt="#">
                <p>Наименование: {{product.name}}</p>
                <p>Цена: {{product.price}}</p>
                <p>Количество: {{product.count}}</p>
            </div>
            <div class="card">
                <img src="../../assets/img4.png" alt="#">
                <p>Наименование: {{product.name}}</p>
                <p>Цена: {{product.price}}</p>
                <p>Количество: {{product.count}}</p>
            </div>
            </div>
        

    </div>

    
</template>
<script>
export default {
    name: 'ProductCard',
    data() {
        return {
            product: {
                name: 'Название',
                price: 17,
                count: 120
            }
        }
    }
}
</script>
<style>
h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
}
.cards {
    display: flex;
    flex-direction: row;
}
.card {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}
img {
    width: 300px;
    height: 300px;
}
</style>