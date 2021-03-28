<template>
    <div class="nav-bar">
        <div class="left-nav-bar">
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Корзина</a></li>
        </ul>
        </div>

        <div class="center-nav-bar">
            <ul><li>LOGOTIP</li></ul>
        </div>

        <div class="right-nav-bar">
        <ul>
            <li><a href="#">Избранное</a></li>
            <li><a href="#">Помощь</a></li>
            <li><a href="#">Вход</a></li>
        </ul>
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
/* .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: blue;
} */
.nav-bar {
    display: inline;
}
.left-nav-bar {
    display: inline-block;
    background-color: brown;
}
.right-nav-bar {
     display: inline-block;
    background-color: burlywood;
}
.center-nav-bar {
     display: inline-block;
    background-color: darkblue;
}
/* ul {
    display: flex;
    flex-direction: row;
} */

ul {
    margin-left: 0px;
    padding-left: 0px;
    list-style: none;
}
/* li {
    width: 150px;
    list-style: none;
    border: solid 3px black;
} */
li { 
    display: inline; 
}
ul a, .center-nav-bar {
                display: inline-block;
                width: 5em;
                padding:10px;
                background-color: #f4f4f4;
                border: 1px solid #333;
                text-decoration: none;
                color: #333;
                text-align: center;
            }
ul a:hover{
                background-color: #333;
                color: #f4f4f4;
            }
</style>