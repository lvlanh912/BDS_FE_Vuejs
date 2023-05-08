<template>

</template>

<script>
export default {
data(){
		return{
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