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
h1{
    font-family:'Times New Roman', Times, serif;
    color: whitesmoke;
}
.navigation{
    width: 100%;
}
.navbar{
    display: flex;
    flex-direction: row;
    background-color:rgb(37, 7, 94);

}
.left-nav{
    float: left;
    margin-right: 5px;
}
.right-nav{
    float: right;
    margin-left: 5px;
}
ul{
    margin-left: 0px;
    padding-left: 0px;
    display: flex;
    list-style: none;
    
}
li:hover{
background-color: yellow;
color: black;
}
li{
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
}
a{
    text-decoration: none;
    color: rgb(182, 226, 243);
}

</style>