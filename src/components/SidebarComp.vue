<template>
  <div class="sidebar">
    <router-link to="/dashboard" class="active"> <span class="sidebar-icon"><img src="@/assets/img/dashboard.png" alt=""></span> Dashboard</router-link>
    <router-link to="/products"><span class="sidebar-icon"><img src="@/assets/img/product.png" alt=""></span> Products</router-link>
    <router-link to="/dashboard"><span class="sidebar-icon"><img src="@/assets/img/shopping-bag.png" alt=""></span> Orders</router-link>
    <router-link to="/dashboard"><span class="sidebar-icon"><img src="@/assets/img/user.png" alt=""></span> Users</router-link>
  </div>
</template>