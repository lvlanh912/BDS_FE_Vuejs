<template>
     <!-- Form -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card card-primary">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                			<div class="p-5">
                                <h4 class="nav-link" @click="goBack">Quay lại</h4>
									<div class="text-center">
										<h1 class="h4 text-gray-900 mb-4">Cập nhật thông tin tài khoản</h1>
									</div>
								<form @submit.prevent="Save">
									<div class="form-group">
										<label >Id</label>
										<input  class="form-control" v-model="User._id" readonly >
									</div>
									<div class="form-group">
										<label >UserName</label>
										<input  class="form-control" v-model="User.username" readonly >
									</div>
									<div class="form-group">
										<label >Password</label>
										<input type="text" class="form-control" placeholder="Enter password"
										v-model="User.password">
									</div>
									<div class="form-group">
										<label >Email address</label>
										<input type="email" class="form-control" placeholder="Enter email"
										v-model="User.email">
									</div>
									<div class="form-group">
										<label>Full Name</label>
										<input type="text" class="form-control" placeholder="Enter FullName"
										v-model="User.fullname">
									</div>
									<div class="form-group">
										<label>Phone</label>
										<input type="tel" class="form-control" placeholder="Enter Phone Nummber" v-model="User.phone">
									</div>
									<div class="form-group">
										<label>Ngày tạo</label>
										<input  class="form-control" v-model="User.createDate" readonly >
									</div>
									<div class="d-flex justify-content-center">
										<button type="submit" class="btn btn-primary">Gửi</button>
									</div>
									</form>
								</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    <!-- /Form -->
</template>

<script>
export default {
	data(){
		return{
			User:{
				  	_id:'',
					username:'',
					password:'',
					email:'',
					fullname:'',
					phone:'',
					createDate:''
			}
		}
	},
created(){
	let id=(this.$route.params.id)
	console.log(id)
	if(id){
		this.GetUser(id)
	}
},
methods:{
	GetUser(id){
	this.$request.get(`https://localhost:7265/api/users/${id}`).then(res=>{
		this.User=res.data
	})
	},
	Save(){
		this.$request.put(`https://localhost:7265/api/user?id=${this.User._id}`,this.User).then(res=>{
			 if (res.status >= 200 && res.status < 300){
				this.$swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Đã lưu',
				showConfirmButton: false,
				timer: 1500
				})
				this.$router.go(-1);
				//chuyển hướng sang trang thông tin chi tiết tài khoản
				return
			 }
			this.$swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!'
				})
		})
	},
	 goBack() {
      this.$router.go(-1);
    }
}
}
</script>

<style>

</style>