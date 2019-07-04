<template>
    <div class="form">
        <h1>{{$store.getters.isAuthenticated}} </h1>
        <div class="form-group">
            <p v-if="hasError">{{errorMessage}}</p>
            <label class="form-label">
                <p>Login</p>
                <input required v-model="creds.login" class="form-input" type="text" placeholder="login">
            </label>
            <label class="form-label">
                <p>Password</p>
                <input required v-model="creds.password" class="form-input" type="password" placeholder="password">
            </label>
            <input @click="logInUser()" class="btn" type="button" value="ВПУСТИТЕ МЕНЯ">
            <input @click="$store.dispatch('logOut')" class="btn" type="button" value="ВыПУСТИТЕ МЕНЯ">
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
        height: 50%;
        width: 50%;
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
        width: 100%;
        font-size: 20px;
    }

    .btn {
        display: block;
        margin-top: 20px;
    }
</style>