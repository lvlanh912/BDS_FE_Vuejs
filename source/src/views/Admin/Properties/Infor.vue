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
										<h1 class="h4 text-gray-900 mb-4">Chi tiết bài viết</h1>
									</div>
								<form>
									<div class="form-group">
										<label >Id</label>
										<input  class="form-control" v-model="Properties._id" readonly >
									</div>
									<div class="form-group">
										<label >Tiêu đề</label>
										<input  class="form-control" v-model="Properties.title" readonly >
									</div>
									<div class="form-group">
										<label >Nội dung</label>
										<textarea class="form-control" placeholder="Nhập nội dung"
										v-model="Properties.description" readonly rows="10">
										</textarea>
									</div>
									<div class="form-group">
										<label >Giá </label>
										<input class="form-control" placeholder="Enter email"
										v-model="Properties.price" readonly>
									</div>
									<div class="form-group">
										<label>Địa Chỉ</label>
										<input type="text" class="form-control" placeholder="Enter FullName"
										v-model="Properties.address" readonly>
									</div>
									<div class="form-group">
										<label>ảnh</label>
										<img class="img-thumbnail" alt="img" style="width: 200px;height: 200px;" :src="'https://localhost:7265/api/images/'+Properties._id+'.jpg'">
									</div>
									<div class="d-flex justify-content-center" >
										<router-link class="btn btn-primary" :to="{name:'properties.edit',params:{id:Properties._id??null}}">
											Sửa
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
	if(this.$route.params.id){
		this.GetProperties(this.$route.params.id)
	}
},
methods:{
	GetProperties(id){
	this.$request.get(`https://localhost:7265/api/properties/${id}`).then(res=>{
		this.Properties=res.data
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