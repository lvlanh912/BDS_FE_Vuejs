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
