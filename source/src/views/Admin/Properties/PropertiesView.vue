<template>
 <div id="wrapper">
  <ComHeader/>
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
  <div class="container-fluid">
      <!-- Page Heading -->
      <!-- Form -->
          <div class="row justify-content-center" v-show="IsShowForm">
              <div class="col-xl-10 col-lg-12 col-md-9">
                  <div class="card o-hidden border-0 shadow-lg my-5">
                      <div class="card-body p-0">
                          <!-- Nested Row within Card Body -->
                  <div class="row">
                      <div class="col-lg-12">
                  <div class="float-right py-3 px-2" >
                    <span class="mr-4 bg-light" @click="IsShowForm=!IsShowForm" >Đóng</span>
                  </div>
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Thêm bài đăng mới</h1>
                    </div>
                      <form class="user" @submit.prevent="Save">
                        <div class="form-group">
                          <label class="mx-2"> Tiêu đề </label>
                          <input type="text" class="form-control form-control-user"  v-model="Payload.title"
                            placeholder="Nhập tiêu đề tin">
                        </div>
                        <div class="form-group">
                          <label class="mx-2">Nội dung tin tức </label>
                          <textarea class="form-control form-control-user textarea" v-model="Payload.description" placeholder="Nhập nội bài viết"  rows="5">
                          </textarea>
                        </div>
                        <div class="form-group">
                          <label class="mx-2">Giá</label>
                          <input type="number"  class="form-control form-control-user" v-model="Payload.price" placeholder="Nhập giá của bất động sản">
                        </div>
                        <div class="form-group">
                          <label class="mx-2">Địa chỉ</label>
                          <input class="form-control form-control-user" v-model="Payload.address" placeholder="Nhập địa chỉ">
                        </div>
                       
                        <div class="form-group">
                          <label >Chọn ảnh</label>
                          <input type="file" accept="image/*" class="form-control-file"  @change="onFileChange">
                      </div>
                          <button type="submit" class="btn btn-primary btn-user btn-block">
                          Tạo
                          </button>
                    </form>
                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      <!-- /Form -->
      <h1 class="h3 mb-2 text-gray-800">{{content}}</h1>
      <p class="mb-4">Thêm sửa xoá, cập nhật tài khoản của các thành viên trong trang web tại đây </p>
      <div class="container position-fixed px-2 py-2 top-50 start-50 Showtop" >
      </div>
      <!-- DataTales Example -->
  <div class="card shadow mb-4">
      <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Danh sách các tài khoản</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
            <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="dataTable_length">
                    <label>Show 
                        <select name="dataTable_length" v-model="Page.pageSize" @change="GetAll(this.keyword,1,this.Page.pageSize)" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select> 
                      entries
                      </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 inline-flex">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <label>Tìm kiếm:
                      <input type="search" v-model="keyword" @input="Search" class="form-control form-control-sm" placeholder="Bạn cần tìm gì?" aria-controls="dataTable">
                    </label>
                    <div class="my-3 float-right">
                  <button type="button" class="btn btn-success" @click="IsShowForm=!IsShowForm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database-fill-add" viewBox="0 0 16 16">
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z"></path>
                  <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z"></path>
                </svg>
                  Thêm Bài đăng mới
                </button>
                </div>
                  </div>
                
                </div>
              </div>
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                <thead>
                    <tr role="row">
                      <th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 121.2px;">
                        id
                      </th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 190.2px;">
                        Title
                        </th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 32.2px;">
                        Giá
                      </th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 69.2px;">
                        Ngày đăng
                      </th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 69.2px;">
                        Tuỳ chọn
                      </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr><th rowspan="1" colspan="1">Id</th><th rowspan="1" colspan="1">Title</th><th rowspan="1" colspan="1">Giá</th><th rowspan="1" colspan="1">Ngày đăng</th><th rowspan="1" colspan="1">Tuỳ chọn</th></tr>
                </tfoot>
              <tbody>
                <tr class="odd" :key="index" v-for="(Properties,index) in Page.items">
                        <td class="sorting_1">
                          <router-link :to="{name:'properties.infor',params:{id:Properties._id}}" class="nav-link"> {{Properties._id}}</router-link>
                          </td>
                        <td>{{Properties.title}}</td>
                        <td>{{Properties.price}}</td>
                        <td>{{Properties.createAt}}</td>
                        <td>
                          <router-link  :to="{name:'properties.edit',params:{id:Properties._id}}" class="btn btn-warning btn-sm px-2 mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                              </svg>
                              Sửa
                          </router-link>
                          <button  class="btn btn-danger btn-sm px-2 mx-1" @click="onDelete(Properties._id)" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                            <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                            </svg>
                            Xoá
                          </button>
                        </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <div class="row">
        <div class="col-sm-12 col-md-5">
        <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite"> Total {{this.Page.totalCount}} item</div></div>
        <div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
          <ul class="pagination">
            <li class="paginate_button page-item "
            v-for="pageNumber in this.Page.totalPages" :key="pageNumber" @click="ChangePage(pageNumber)" 
            :class="{active: pageNumber==this.Page.pageIndex}"
            >
            <a href="#" aria-controls="dataTable"  class="page-link">{{pageNumber}}</a>
            </li>
          </ul>
          </div></div></div></div>
        </div>
      </div>
  </div>
  </div>
  </div>
  </div >
</div >
</template>
<script>
import ComHeader from '../../../components/ComHeader.vue'
// @ is an alias to /src
export default {
  name: 'PropertiesView',
  data(){
    return{
       timer: null,
      keyword:'',
      Page:{
        items:[],
        totalCount:'',
        pageIndex:'',
        pageSize:'',
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
      Payload:{
        title:'',
        description:'',
        price:'',
        address:'',
        images:null,
      },
       content:"Quản lý tài khoản",
       IsShowForm:false
    }
  },
  created(){
    this.GetAll('',1,25)
  },
  components: {
    ComHeader
  },
  methods:{
    onDelete(id){
      this.$swal.fire({
        title: 'Bạn có chắc ?',
        text: "Bạn sẽ không thể khôi phục!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xác nhận xoá'
      }).then((result) => {
        if (result.isConfirmed) {
           this.$request.delete(`https://localhost:7265/api/properties?id=${id}`).then(res=>{
            if(res.status=='200'){
               this.$swal.fire(
                'Đã xoá thành công!',
                '',
                'success'
              )
              this.GetAll('',this.Page.pageIndex,this.Page.pageSize)
              return
            }
             this.$$swal.fire('Something is wrong', '', 'info')
            })
        }
      })
    },
   
    ChangePage(index){
        this.GetAll(this.keyword,index,this.Page.pageSize)  
    },
    Search(){
      clearTimeout(this.timer);
       this.timer= setTimeout(() => {
       this.GetAll(this.keyword,1,this.Page.pageSize)
      }, 1000)
    },
    IsNumber( value){
      return /^\d*$/.test(value)
    },
    Save(){
      let formdata=new FormData()
      formdata.append('title',this.Payload.title)
      formdata.append('description',this.Payload.description)
      formdata.append('price',this.Payload.price)
      formdata.append('address',this.Payload.address)
      formdata.append('file',this.Payload.images)
      console.log(formdata)
      console.log(this.Payload.images)
      this.$request.post('https://localhost:7265/api/properties',formdata,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }}
          ).then(res=>{
        console.log(res.status)
        if(res.status=='201'){
          this.$router.push({name: 'properties'})
          this.IsShowForm=false
          return
          } 
        alert('some thing is wrong!!!')
      })
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
    onFileChange(e){
      const file=e.target.files[0]
      this.Payload.images=file
    }
  }
}
</script>
<style scoped>
.Showtop{
z-index: 100;
max-width: 100%;
}
.row.justify-content-center {
    position: fixed;
    z-index: 33;
    width: 80%;
}
textarea{
  border-radius: 0px !important;
}
</style>
