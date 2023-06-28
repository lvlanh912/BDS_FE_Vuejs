<template>
<div>
  <router-view/>
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright © Your Website, Develope by Lvlanh</span>
                    </div>
                </div>
            </footer>
  
</div>
</template>
<script>
import ComHeader from "../src/components/ComHeader.vue"
export default {
  created () {
    if(localStorage.getItem('jwt')!=null)
    this.$request.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('jwt')
  },
  components: {
    ComHeader
}
}
</script>
<style>
.text{
  text-decoration: none;
}
</style>
