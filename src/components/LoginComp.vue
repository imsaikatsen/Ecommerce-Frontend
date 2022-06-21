<template>
  <div class="container">
    <div class="row">
      <h3 class="text-center mt-3">Please Login first !!</h3>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form method="post" v-on:submit.prevent="submitForm">
          <div class="mb-3 mt-5">
            <label for="exampleInputEmail1" class="form-label custom-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              placeholder="example@gmail.com"
              v-model="form.email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label custom-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              placeholder="******"
              v-model="form.password"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary custom-btn">
            Log In
          </button>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations , mapGetters  } from 'vuex'
export default {
  name: "LoginComp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError:false,
    };
  },
  methods: {
     ...mapMutations(["setUser", "setToken"]),
   async submitForm(e){
     e.preventDefault();
       const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.password,
        }),
      });
      console.log(response);
      const { user, access_token }= await response.json();
      this.setUser(user);
      this.setToken(access_token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', access_token);
      this.$router.push("/dashboard");
      
   },
    computed: {
    ...mapGetters(["isLoggedIn"])
  }

  },
  
};
</script>

<style scoped>
</style>
