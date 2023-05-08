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
										<h1 class="h4 text-gray-900 mb-4">Cập nhật thông tin tin tức</h1>
									</div>
								<form @submit.prevent="Save">
									<div class="form-group">
										<label >Id</label>
										<input  class="form-control" v-model="News._id" readonly >
									</div>
									<div class="form-group">
										<label >Tiêu đề</label>
										<input  class="form-control" v-model="News.title" readonly >
									</div>
									<div class="form-group">
										<label >Nội dung</label>
										<textarea class="form-control" placeholder="Nhập nội dung"
										v-model="News.content" rows="10">
										</textarea>
									</div>
									<div class="form-group">
										<label >Được đăng bởi </label>
										<input class="form-control" placeholder="Enter email"
										v-model="News.by" readonly>
									</div>
									<div class="form-group">
										<label>Đăng ngày</label>
										<input type="text" class="form-control" placeholder="Enter FullName"
										v-model="News.date_Public">
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
		News:{
			_id:'',
			title:'',
			content:'',
			date_Public:'',
			by:''
		}
		}
	},
created(){
	let id=(this.$route.params.id)
	console.log(id)
	if(id){
		this.GetNews(id)
	}
},
methods:{
	GetNews(id){
	this.$request.get(`https://localhost:7265/api/news/${id}`).then(res=>{
		this.News=res.data
	})
	},
	Save(){
		this.$request.put(`https://localhost:7265/api/news?id=${this.News._id}`,this.News).then(res=>{
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