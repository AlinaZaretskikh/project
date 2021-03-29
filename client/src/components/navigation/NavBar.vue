<template>
<nav>
    <div class="nav-bar">
        <div class="left-nav-bar">
        <ul>
            <li><router-link to="/">Главная</router-link></li>
            <li><router-link to="/katalog">Каталог</router-link></li>
            <li><router-link to="/">Корзина</router-link></li>
        </ul>
        </div>

        <div class="center-nav-bar">
            <ul><li>ОПЕРАТИВ</li></ul>
        </div>

        <div class="right-nav-bar">
        <ul>
            <li><router-link to="/">Избранное</router-link></li>
            <li><router-link to="/">Помощь</router-link></li>
            <li><router-link to="/login">Вход</router-link></li>
        </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    components: {
        
    }
}
</script>


<style scoped>
nav {
    display: inline;
}
.nav-bar {
    display: inline;
    float: left;
    background-color: rgb(37, 7, 94);
}
.left-nav-bar {
    display: inline-block;
}
.right-nav-bar {
     display: inline-block;
}
.center-nav-bar {
     display: inline;
}
ul {
    margin-left: 0px;
    padding-left: 0px;
    list-style: none;
}
li { 
    display: inline; 
}
.center-nav-bar {
display: inline-block;
color: whitesmoke;
width: 12em;
background-color:rgb(37, 7, 94);
font-size: 20px;
text-decoration: none;
text-align: center;
}
ul a {
font-size: 25px;
margin: 4px;
display: inline-block;
width: 7.72em;
padding:2px;
background-color:rgb(17, 3, 43);
border: 4px solid black;
border-radius: 5px;
text-decoration: none;
text-align: center;
font-family: "impact";
    color: rgb(182, 226, 243);
}
ul a:hover{
background-color: yellow;
color: black;
}
</style>