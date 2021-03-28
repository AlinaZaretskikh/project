<template>
    <div class="katalog-page">
        <NavBar/>
        <div class="katalogs">
            <div class="katalog" v-for="category in categories" v-bind:key="category.id">
                <p>{{category.name}}</p>
            </div>
        </div>
             
    </div>
</template>

<script>
import NavBar from '../navigation/NavBar'
export default {
    name: 'KatalogPage',
    components: {
        NavBar
    },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Coml'
                },
                {
                    id: 2,
                    name: 'Coml2'
                },
                {
                    id: 3,
                    name: 'Coml3'
                },
                {
                    id: 4,
                    name: 'Coml4'
                }
            ]
        }
    }
}
</script>

<style scoped>
.katalog-page {
    display: flex;
    flex-direction: column;
}
.katalogs {
    display: flex;
    flex-direction: row;
}
.katalog{
    font-family: impact;
    font-size: 35px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    margin: 10px;
    border: 4px solid black;
    background-color: rgb(218, 145, 238);
}

</style>