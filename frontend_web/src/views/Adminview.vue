<script>
import HeaderShopVue from "../components/HeaderShop.vue";
import ListUser from "../components/ListUser.vue";
import UserService from "../services/User.service";
import toastsVue from "../components/toasts.vue";
import ProductService from "../services/Product.service";
import ListProduct from "../components/ListProduct.vue";
import Productcard from "../components/Productcard.vue";
import Usercard from "../components/Usercard.vue";
import toast from "../assets/js/toasts";
export default {
    data() {
        return {
            users: [],
            products: [],
            activeIndex: -1,
            activeUser: -1,
            toasts: {
                title: "Warning",
                msg: "Bạn không phải ADMIN",
                type: "warn",
                duration: 3000
            },
        }
    },
    computed: {
        getindex() {
            if (this.activeIndex != -1) {
                const list = document.querySelectorAll(".product-item");
                list.forEach(element => {
                    element.classList.remove("active");
                });
                list[this.activeIndex].classList.add("active");
                return this.products[this.activeIndex];
            }
        },
        getindexuser() {
            if (this.activeUser != -1) {
                const list = document.querySelectorAll(".user-item");
                list.forEach(element => {
                    element.classList.remove("active");
                });
                list[this.activeUser].classList.add("active");
                return this.users[this.activeUser];
            }
        }
    },
    components: {
        HeaderShopVue,
        ListUser,
        ListProduct,
        toastsVue,
        Productcard,
        Usercard
    },
    methods: {
        toast,
        async getall() {
            try {
                this.products = await ProductService.getAll();
                this.users = await UserService.getAll();
            } catch (error) {
                console.log(error);
                this.toast();
                setTimeout(() => {
                    this.$router.push({ name: "ShopMain" });
                }, 1000);
            }
        },
    },
    created() {
        this.getall();
    },
}
</script>

<template>
    <div class="container-f">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href=""><router-link to="/admin" class="text-white">
                    ADMIN</router-link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        </nav>
        <br>
        <br>
        <br>
    </div>
    <h1 style="text-align: center; ">TRANG WEB QUẢN LÝ CỦA ADMIN </h1>
    
    <div class="container text-center mt-4">
  <div class="d-flex justify-content-center">
    <div class="p-2">
      <button class="btn btn-danger text-white">
        <router-link to="/ListKH" class="nav-link text-white">Danh Sách Người Dùng</router-link>
      </button>
    </div>
    <div class="p-2">
      <button class="btn btn-danger text-white">
        <router-link to="/ListSP" class="nav-link text-white">Danh Sách Sản Phẩm</router-link>
      </button>
    </div>
  </div>
</div>

</template>
<style scoped>
.list_item_product,
.list_item_user {
    max-height: 500px;
    overflow-y: scroll;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

/* .container {
    background-image: url('../assets/img/admin.jpg');
} */

#product::-webkit-scrollbar,
#user::-webkit-scrollbar {
    width: 6px;
    background-color: #f8eeee;
}

.background {
    background-image: url('../assets/img/bg1.jpg');
}
</style>