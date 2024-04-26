<template >
  <!-- Remove the container if you want to extend the Footer to full width. -->
 <div class=" my-5 footer-container">
   <footer>
   <section class="text-center container mt-3">
     <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3">
       <div class="col">
         <div class="mb-3"> 
         </div>
         <h5>MIỄN PHÍ GIAO HÀNG</h5>
         <p>Miễn Phí Giao Hàng Với Hoá Đơn Trên 900.000đ
         </p>
       </div>
       
       <div class="col">
         <div class="mb-3">
           <font-awesome-icon :icon="['far', 'location-dot']" />
           
         </div>
         <h5>ĐỊA CHỈ</h5>
         <p>3/2, An Khánh Ninh Kiều, Cần Thơ</p>
       </div>
 
 
     </div>
   </section>
   <section class="bg-black text-white">
     <div class="container py-3">
       <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4">
         <div class="col">
           <h5>ĐƯỢC TRỢ GIÚP</h5>
           <a href="">
             <p>Tình trạng đặt hàng</p>
           </a>
           <a href="">
             <p>Vận chuyển</p>
           </a>
           <a href="">
             <p>Lợi nhuận</p>
           </a>
           <a href="">
             <p>Các lựa chọn thanh toán</p>
           </a>
           <a href="">
             <p>Liên hệ chúng tôi</p>
           </a>
 
         </div>
         <div class="col">
           <h5>Shop Book</h5>
           <a href="">
             <p>Tin tức</p>
           </a>
           <a href="">
             <p>Các nhà tài trợ</p>
           </a>
           <a href="">
             <p>Độ tin cậy</p>
           </a>
         </div>	
         <div class="col">
           <h5>TỔNG TÀI HỖ TRỢ</h5>
           <a href="">
             <p>Gọi mua: 
               <span>1800.1234</span>
             </p>
            </a>
           
           <a href="">
             <p>Khiếu nại: 
               <span>1800.1235</span>
             </p>
           </a>
           
 
         </div>
         <div class="col">
           <h5>KHÁC</h5>
           <a href="">
             <p>Tìm một cửa hàng</p>
           </a>
           <a href="">
             <p>Ứng tuyển</p>
           </a>
           <a href="">
             <p>Gửi phản hồi</p>
           </a>
           <div class="row row-cols-md-4 "> 
             
           </div>
         </div>
 
       </div>
       </div>
   </section>
   <section class="bg-black text-white">
     <div class="container  py-3">
       <div class="row ">
        
         <div class="col text-center">
           <p><a href=""><span>Hướng dẫn</span></a> <a href=""><span>Điều khoản sử
                 dụng</span></a> <a href=""><span>Điều khoản bán hàng</span></a></p>
         </div>
       </div>
     </div>
   </section>
 </footer>
 
 </div>
 <!-- End of .container -->
 </template>
 <style>
 div.col>a{
     text-decoration: none;
    color: rgb(9, 9, 9);  
 }
 div.col>a:hover{
 color: rgb(16, 15, 15); 
 }   
 div.society>a>p>i{
     font-size: x-large;
 }
 div.col>p>a{
     text-decoration: none;
     color: rgb(11, 11, 11);  
 
 }
 div.col>p>a:hover{
  color: rgb(12, 9, 9);
 }
 div.col>a>p>span:hover{
     color: blue;
    }
 i.fa-facebook:hover{
     color: #3b5998;
 }
 i.fa-twitter:hover{
     color: #55acee;
 }
 i.fa-instagram:hover{
     color: #ac2bac;
 }
 li.itemLogin{
     display: inline;
 }
 ul.ulLogin{
     width: 300px;
 }
 .table-hover tbody tr:hover {
     background-color: #2d2dc8; /* Màu sắc khi hover */
     cursor: pointer; /* Thay đổi con trỏ chuột khi hover */
   }
.footer-container{
  background-color: #fa1753;
}
  
 </style>