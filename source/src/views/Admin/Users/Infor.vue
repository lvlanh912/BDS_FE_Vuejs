<template>
     <!-- Form -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                			<div class="p-5">
                                <h4 class="nav-link" @click="goBack">Quay lại</h4>
									<div class="text-center">
										<h1 class="h4 text-gray-900 mb-4">Thông tin tài khoản</h1>
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
										v-model="User.password" readonly>
									</div>
									<div class="form-group">
										<label >Email address</label>
										<input type="email" class="form-control" placeholder="Enter email"
										v-model="User.email" readonly>
									</div>
									<div class="form-group">
										<label>Full Name</label>
										<input type="text" class="form-control" placeholder="Enter FullName"
										v-model="User.fullname" readonly>
									</div>
									<div class="form-group">
										<label>Phone</label>
										<input type="tel" class="form-control" placeholder="Enter Phone Nummber" v-model="User.phone" readonly>
									</div>
									<div class="form-group">
										<label>Ngày tạo</label>
										<input  class="form-control" v-model="User.createDate" readonly >
									</div>
									<div class="d-flex justify-content-center">
                                        <router-link  :to="{name:'user.edit',params:{id:User._id}}">
										<button type="submit" class="btn btn-primary">Sửa</button>
                                        </router-link>
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
    goBack() {
      this.$router.go(-1);
    }
}
}
</script>

<style>

</style>