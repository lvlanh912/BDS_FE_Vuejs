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
										<h1 class="h4 text-gray-900 mb-4">Chỉnh sửa bài viết</h1>
									</div>
								<form @submit.prevent="Save">
									<div class="form-group">
										<label >Id</label>
										<input  class="form-control" v-model="Properties._id" readonly >
									</div>
									<div class="form-group">
										<label >Tiêu đề</label>
										<input  class="form-control" v-model="Properties.title" >
									</div>
									<div class="form-group">
										<label >Nội dung</label>
										<textarea class="form-control" placeholder="Nhập nội dung"
										v-model="Properties.description" rows="10">
										</textarea>
									</div>
									<div class="form-group">
										<label >Giá </label>
										<input class="form-control" placeholder="Enter email"
										v-model="Properties.price">
									</div>
									<div class="form-group">
										<label>Địa Chỉ</label>
										<input type="text" class="form-control" placeholder="Enter FullName"
										v-model="Properties.address">
									</div>
									<div class="form-group">
										<label>ảnh</label>
										<img class="img-thumbnail" alt="img" style="width: 200px;height: 200px;" :src="'https://localhost:7265/api/images/'+Properties.images">
									</div>
									<div class="d-flex justify-content-center" >
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
			image:null,
		Properties:{
		 _id:'',
        title:'',
        description:'',
        price:'',
        address:'',
        images:'',
        status:'',
        createAt:''
		}
		}
	},
created(){
	let id=(this.$route.params.id)
	console.log(id)
	if(id){
		this.GetProperties(id)
	}
},
methods:{
	GetProperties(id){
	this.$request.get(`https://localhost:7265/api/Properties/${id}`).then(res=>{
		this.Properties=res.data
	})
	},
	Save(){
		this.$request.put(`https://localhost:7265/api/properties?id=${this.Properties._id}`,this.Properties).then(res=>{
			 if (res.status >= 200 && res.status < 300){
				this.$swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Đã lưu',
				showConfirmButton: false,
				timer: 1500
				})
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