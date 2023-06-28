<template>
<div class="row justify-content-center">
  <div class="col-5">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-12">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Đăng nhập quản trị viên</h1>
              </div>
              <form class="user" @submit.prevent="login">
                <div class="form-group">
                  <label class="mx-2"> Tài khoản</label>
                  <input type="text" class="form-control form-control-user" v-model="Userlogin.username" placeholder="Nhập username">
                </div>
                <div class="form-group">
                  <label class="mx-2"> Mật khẩu </label>
                  <input type="text" class="form-control form-control-user" v-model="Userlogin.password" placeholder="Nhập mật khẩu">
                </div>
                <button  type="submit" class="btn btn-primary btn-user btn-block">Đăng nhập </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      Userlogin:{
        username:"",
        password:""
      }
    }
  },
  methods: {
    login(){
      console.log(this.Userlogin)
      this.$request.post('https://localhost:7265/api/admin/login',this.Userlogin).then(res=>{
        if(res.status=='200')
        console.log(res.data.data)
        localStorage.setItem('jwt', res.data.data);
        this.$request.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('jwt')
        console.log('đăng nhập thành công')
        this.$router.push({ name: 'homeadmin' });
      }).catch(()=>{
        console.log('đăng nhập lỗi')
      })
    },
  },

}
</script>

<style>
</style>