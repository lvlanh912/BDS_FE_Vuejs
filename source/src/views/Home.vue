<template>
<div class="wrapper">
  <NavCom/>
<div class="row">
<div class="col-md-8 offset-md-2">
        <div class="input-group">
            <input type="search" v-model="keyword" @input="Search" class="form-control form-control-lg" placeholder="Bạn cần tìm gì ?">
            <div class="input-group-append">
                <span class="btn btn-lg btn-default">
                    <i class="bi bi-search"></i>
                </span>
            </div>
        </div>
</div>
</div>
  <div class="content-wrapper" style="min-height: 1604.8px;">
    <hr  width="50%" align="left" />
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2 mt-3">
          <div class="col-6">
            <h3>Mới đăng gần đây</h3>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
    <div class="card card-solid">
  <div class="card-body pb-0 px-5">
    <div class="row ">
      <div class="card2 col-11 col-sm-6 col-md-4 d-flex align-items-stretch flex-column py-4 px-4" :key="index" v-for="(Properties,index) in Page.items">
        <div class="card bg-light d-flex flex-fill">
          <div class="card-body pt-0 px-0">
            <div class="row">
              <div class="col-12">
                <img alt="Ảnh đại diện" class="pr-img" src="https://file4.batdongsan.com.vn/crop/393x222/2023/04/23/20230423211025-cb94_wm.jpg">
              </div>
              <div class="card-title col-12 max-2">
                    <h3 class="card-title px-3">
                        {{Properties.title}}
                    </h3>
                </div>
                <div class="col-12 d-flex flex-row-reverse ">
                    <h3 class="card-price card-title mr-4">
                        {{Properties.price}}
                    </h3>
                </div>
             <div class="col-12 d-flex flex-row px-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                    <p class="card-postion card-title ml-3">
                       {{Properties.address}}
                    </p>
                </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="text-right">
              <a href="#" class="btn btn-sm bg-teal">
                <i class="fas fa-comments"></i>
              </a>
               <router-link  :to="{name:'ItemProperties.infor',params:{id:Properties._id}}" class="btn btn-sm btn-primary">
                Xem chi tiết</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.card-body -->
  <div class="card-footer">
    <nav aria-label="Contacts Page Navigation">
      <ul class="pagination justify-content-center m-0">
        <li class="page-item" 
         v-for="pageNumber in this.Page.totalPages" :key="pageNumber" 
         @click="ChangePage(pageNumber)" 
          :class="{active: pageNumber==this.Page.pageIndex}">
          <a class="page-link" href="#">{{pageNumber}}</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
    </section>
    <!-- Tin tức  -->
        <section class="content-header mt-4">
      <div class="container-fluid">
        <div class="row mb-2 mt-3">
          <div class="col-6">
            <h3>Tin tức</h3>
          </div>
        </div>
      </div>
    </section>
<section >
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="list-group">
                        <div class="list-group-item py-3" :key="index" v-for="(News,index) in PageNews.items">
                            <div class="row">
                                <div class="col px-4">
                                    <div>
                                        <div class="float-right">{{News.by}}</div>
                                        <h3>{{News.title}}</h3>
                                        <p class="mb-0 max-3">{{News.content}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
  </div>
</div>
</template>
<script>
import NavCom from '../views/NavComponent.vue'
// @ is an alias to /src
export default {

  name: 'Home',
  components: {
    NavCom
  },
  data(){
    return{
        keyword:'',
      PageNews:{
        items:[],
        totalCount:'',
        pageIndex:'',
        pageSize:9,
        totalPages:''
      },
      Page:{
        items:[],
        totalCount:'',
        pageIndex:'',
        pageSize:9,
        totalPages:'',
      },
      Properties:{
        _id:'',
        title:'',
        description:'',
        price:'',
        address:'',
        images:'',
        status:'',
        createAt:''
      },
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
      this.GetAll('',1,9)
      this.GetNews()
    },
  methods:{
   ChangePage(index){
        this.GetAll(this.keyword,index,this.Page.pageSize)  
    },
    Search(){
      clearTimeout(this.timer);
       this.timer= setTimeout(() => {
       this.GetAll(this.keyword,1,this.Page.pageSize)
      }, 1000)
    },
    GetAll(keyword,pageindex,pagesize){
      if(keyword.length >=1){
         this.$request.get(`https://localhost:7265/api/properties?keyword=${keyword}&page=${pageindex}&size=${pagesize}`).then(res=>{
          this.Page=res.data
      })
      }
      else{
           this.$request.get(`https://localhost:7265/api/properties?page=${pageindex}&size=${pagesize}`).then(res=>{
        this.Page=res.data
              console.log(keyword)
        return
      })
      }
    }, 
    GetNews(){
         this.$request.get(`https://localhost:7265/api/news?&page=1&size=10`).then(res=>{
          this.PageNews=res.data
      })
  }
}
}
</script>
<style scoped>
.pr-img{
  width: 100%;
  height: 252px;
}
.card2 :hover{
  background-color: rgba(227, 226, 237, 0.512);
}
.card-title{
    font-family: "Lexend Medium",Roboto,Arial !important;
    font-size: 14px;
    line-height: 20px;
    font-weight: 555 !important;
    margin-top: 6px;
    color: #2C2C2C;
}
.max-2{
    display: -webkit-box; /* sử dụng kiểu display flex box */
  -webkit-line-clamp: 2; /* giới hạn số dòng */
  -webkit-box-orient: vertical; /* chiều dọc */
  overflow: hidden; /* ẩn phần dư */
  text-overflow: ellipsis; /* hiển thị dấu chấm ba chấm khi có phần bị cắt */
}
.max-3{
    display: -webkit-box; /* sử dụng kiểu display flex box */
  -webkit-line-clamp: 3; /* giới hạn số dòng */
  -webkit-box-orient: vertical; /* chiều dọc */
  overflow: hidden; /* ẩn phần dư */
  text-overflow: ellipsis; /* hiển thị dấu chấm ba chấm khi có phần bị cắt */
}
.card-price{
  color: red !important;
}
.card-postion{
color: #2C2C2C !important;
}
</style>