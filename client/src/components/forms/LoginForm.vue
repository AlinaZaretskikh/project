<template>
    <div class="login-form">
        <h1>Авторизация</h1>
        <form v-on:submit.prevent='onSubmit'>
            <label for="login">Логин </label>
            <input id='login' type="text" v-model="form.login">
            <br>
            <label for="password">Пароль </label>
            <input id="password" type="text" v-model="form.password">
            <br>
            <button class="vxod">Войти</button>
            <br>
            <button class="zareg" v-on:click="onRegClicked">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'LoginForm',
    data() {
        return {
            form: {
                login: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'USER_ID'
        ])
    },
    methods: {
        ...mapActions([
            'LOGIN'
        ]),
        async onSubmit() {
            await this.LOGIN(form);
            if (this.USER_ID > 0)
                this.$router.push({name: 'main'})
        },
        onRegClicked() {
            this.$router.push({name: 'regis'})
        }
    }
}
</script>


<style>
.login-form {
    flex-direction: column;
    display: inline-flex;
    align-items: center;
    justify-items: center;
    background-color: white;
    width: 300px;
    height: 350px;
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
.login-form input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid black;

}
.vxod {
    border-radius: 5px;
    margin-top: 10px;
    width: 100px;
    height: 30px;
}

.zareg {
    border-radius: 5px;
    margin-top: 10px;
    width: 200px;
    height: 30px;
}
</style>>

