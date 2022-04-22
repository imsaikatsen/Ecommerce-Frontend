<template>
<div class="container-fluid">
    <div class="row">
       <TopbarComp />
       <div class="col-md-4 custom-sidebar-padding"> 
         <SidebarComp />
       </div>
       <div class="col-md-8"> 
           <router-view/>
       </div>
    </div>
  </div>
  
</template>

<script>
import TopbarComp from '@/components/TopbarComp.vue'
import SidebarComp from '@/components/SidebarComp.vue'
export default {
  components: {
    TopbarComp,
    SidebarComp
  }
}
</script>
