<template>
    <div class="form">
        <div class="form-group">
            <p class="text-danger" v-if="hasError">{{errorMessage}}</p>
            <label class="form-label">
                <p>Login</p>
                <input @input="hasError=false"
                       required
                       v-model="creds.login"
                       class="form-input"
                       type="text"
                       placeholder="login">
            </label>
            <label class="form-label">
                <p>Password</p>
                <input @input="hasError=false"
                       required
                       v-model="creds.password"
                       class="form-input"
                       type="password"
                       @keydown.enter="logInUser()"
                       placeholder="password">
            </label>
            <button @click="logInUser()" class="btn" type="button" >Войти</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AdminForm",
    data() {
      return {
        creds: {
            login: '',
            password: ''
        },
        hasError: false,
        errorMessage: ''
      }
    },
    methods: {
      async logInUser() {
        try {
            await this.$store.dispatch('logIn', this.creds)
        } catch (e) {
          this.hasError = true
          this.errorMessage = e
        }
      }
    }
  }
</script>

<style scoped>
    .form {
        width: 50%;
        min-width: 220px;
        min-height: 280px;
        background-image: url('/adminback.jpeg');
        background-size: cover;
        border-radius: 10px;
        margin: 0px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .form-group {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-label {
        display: block;
        text-align: center;
    }

    .form-label p {
        margin: 5px;
    }

    .form-input {
        width: 95%;
        font-size: 20px;
        border-radius: 3px;
        border: 1px solid red;
        padding: 4px;
    }

    .btn {
        display: block;
        margin-top: 20px;
        height: 30px;
        width: 130px;
        background: #e69393;
    }

    .text-danger {
        color: red;
    }
</style>