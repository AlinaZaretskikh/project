<template>
    <div class="katalog-page">
        <NavBar/>
        <div class="katalogs">
            <div class="katalog" v-for="category in CATEGORIES" v-bind:key="category.id">
                <p>{{category.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../navigation/NavBar'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'KatalogPage',
    components: {
        NavBar
    },
    computed: {
        ...mapGetters([
            'CATEGORIES'
        ])
    },
    methods: {
        ...mapActions([
            'GET_CATEGORIES'
        ])
    },
    mounted() {
        this.GET_CATEGORIES();
    }
}
</script>

<style scoped>
.katalog-page {
    display: flex;
    flex-direction: column;
    max-width: 1920px;
    width: 100%;
}
.katalogs {
    display: flex;
    flex-direction: row;
    max-width: 1920px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
.katalog{
    font-family: impact;
    font-size: 35px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 300px;
    margin: 10px;
    border: 4px solid black;
    background-color: rgb(218, 145, 238);
}

</style>