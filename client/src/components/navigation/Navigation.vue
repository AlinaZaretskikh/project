<template>
    <div class="navigation">
        <div class="navbar">
            <div class="left-nav">
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li><router-link to="/katalog">Каталог</router-link></li>
                    <li><router-link to="/">Корзина</router-link></li>
                </ul>
            </div>

            <div class="center-nav">
                <h1>ОПЕРАТИВ</h1>
            </div>

            <div class="right-nav">
                <ul>
                    <li><router-link to="/">Избранное</router-link></li>
                    <li><router-link to="/">Помощь</router-link></li>
                    <li><router-link to="/login">Вход</router-link></li>
                </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
.navigation {
    width: 100%;
    
}
.navbar {
    display: flex;
    background-color: cornflowerblue;
    max-width: 1920px;
    width: 100%;
    max-height: 200px;
    background-color: rgb(37, 7, 94);
}
.left-nav {
    float: left;
}
.right-nav {
    float: right;
}
ul {
    margin-left: 0px;
    padding-left: 0px;
    display: flex;
    flex-direction: row;
    list-style: none;
}
</style>