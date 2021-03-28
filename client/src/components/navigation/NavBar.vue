<template>
    <div class="nav-bar">
        <div class="left-nav-bar">
            <nav>
                <ul>
                    <li>
                        <a href="">Главное</a>
                    </li>
                    <li>
                        <a href="">Каталог</a>
                    </li>
                    <li>
                        <a href="">Корзина</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="center-nav-bar">
            <p>ЛОГОТИП</p>
        </div>

        <div class="right-nav-bar">
            <nav>
                <ul>
                    <li>
                        <a href="">Избранное</a>
                    </li>
                    <li>
                        <a href="">Помощь</a>
                    </li>
                    <li>
                        <a href="">Вход</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {
        
    }
}
</script>

<style scoped>
.nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: yellow;
}
ul {
    display: flex;
    flex-direction: row;
}
li {
    width: 150px;
    list-style: none;
    border: solid 1px silver;
}
</style>