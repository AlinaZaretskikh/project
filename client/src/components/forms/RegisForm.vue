<template>
    <div class="regis-form">
        <h1>Регистрация</h1>
        <form v-on:submit.prevent='onSubmit'>
            <label for="name">Имя </label>
            <input id='name' type="text" v-model="form.name" placeholder="Иван">
            <br>
            <label for="surname">Фамилия </label>
            <input id="surname" type="text" v-model="form.surname" placeholder="Иванов">
            <br>
            <label for="mail">Имя </label>
            <input id='mail' type="text" v-model="form.name" placeholder="name@example.com">
            <br>
            <label for="password_1">Имя </label>
            <input id='password_1' type="text" v-model="form.name" placeholder="Придумайте пароль">
            <br>
            <button class="zareg">Зарегистрироваться</button>
            <br>    
            <button class="vxod">Войти</button>
            <br>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegisForm',
    data() {
        return {
            form: {
                name: '',
                surname: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push({name: 'login'})
        }
    }
}
</script>


<style>
.regis-form {
    flex-direction: column;
    display: inline-flex;
    align-items: center;
    justify-items: center;
    background-color: rgb(174, 192, 240);
    width: 300px;
    height: 500px;
    border-radius: 10px;
    margin-left: 40%;
}
form {
   flex-direction: column;
    display: inline-flex;
    align-items: center;
    justify-items: center;
}

 h1 {
     text-align: center;

 }
input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid black;

}
.regis-form button {
    border-radius: 5px;
    margin-top: 10px;
    width: 200px;
    height: 30px;
}
.regis-form .vxod {
    border-radius: 5px;
    margin-top: 10px;
    width: 100px;
    height: 30px;
}

.regis-form .zareg {
    border-radius: 5px;
    margin-top: 10px;
    width: 200px;
    height: 30px;
}
</style>>

