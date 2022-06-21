<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <div class="col-md-3">
            <h4 class="shop-title">Saikat Shop</h4>
        </div>
        <div class="col-md-6">
           
        </div>
        <div class="col-md-3">
             <div class="collapse navbar-collapse custom-dropdown-profile" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" @click="logOut()">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.state.user = null;
      this.$store.state.token = null;
      localStorage.setItem('token', null);
      localStorage.setItem('user', null);
      this.$router.push('/');
    }
  }
}
</script>
