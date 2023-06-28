<template>
 <div id="wrapper">
  <ComHeader/>
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
  <div class="container-fluid">
      <!-- Page Heading -->
      <!-- Form -->
      <h1 class="h3 mb-2 text-gray-800">{{content}}</h1>
      <div class="container position-fixed px-2 py-2 top-50 start-50 Showtop" >
      </div>
  </div>
  </div>
  </div >
</div >
</template>

<script>
import ComHeader from '../../components/ComHeader.vue'
// @ is an alias to /src
export default {
  created () {
    console.log(this)
    this.$request.post('https://localhost:7265/api/admin/profile').then(res=>{
      this.content='xin chào,'+res.data
      }).catch(()=>{
        this.$router.push({ name: "admin.login" });
      })
  },
  name: 'HomeView',
  data(){
    return{
       content:"Đây là trang chủ admin"
    }
  },
  components: {
    ComHeader
  }
}
</script>