<template>
<div class="main-header navbar navbar-expand navbar-white navbar-light">
<ul class="navbar-nav">
    <li class="nav-item">
   <img src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg" class="nav-icon">
    </li>
    <li class="nav-item d-none d-sm-inline-block">
    <router-link to='/' class="nav-link">Trang chủ</router-link>
    </li>
     <li class="nav-item d-none d-sm-inline-block">
    <router-link to='/' class="nav-link">Tin tức</router-link>
    </li>
</ul>
<div class="ml-auto ">
    <p class="h5"> Hôm nay : {{currentTime}}</p>
</div>
</div>
</template>
<script>
export default {
data() {
    return {
      currentTime: new Date().toLocaleString() // khởi tạo giá trị của biến currentTime bằng ngày giờ hiện tại
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString() // cập nhật giá trị của biến currentTime sau mỗi giây
    }, 1000)
  }
}
</script>

<style scoped>
.nav-link{
    color: rgb(0, 0, 0) !important;
    font-weight: 600 !important;
        padding-right: 1rem;
    padding-left: 1rem;
        height: 2.5rem;
    position: relative;
        display: block;
    padding: .5rem 1rem;
}
.nav-icon{
    height: 48px;
    padding-right: 5px;
    font-family: "Roboto Regular",Roboto,Arial !important;
}
</style>