<template>
  <div class="container">
    <div class="row">
      <h3>Please Login first !!</h3>
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
import { mapActions } from 'vuex'
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
    ...mapActions(["login"]),

    submitForm: function(){
      this.$store.dispatch('login', this.form)
      .then(() => this.$router.push('/dashboard'))
      .catch(err => console.log(err))
    }

  },
};
</script>

<style scoped>
</style>
