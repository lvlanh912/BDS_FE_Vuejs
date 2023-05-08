<template>
  <div class="home">
   <h2>{{content}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data(){
    return{
       content:"Đây là trang người dùng"
    }
  },
  components: {
  }
}
</script>