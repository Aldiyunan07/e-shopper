<template>
    <HeaderView/>
    <div class="cartshop">
        <section id="cart_items">
            <div class="container">
                <div class="breadcrumbs">
                    <ol class="breadcrumb">
                      <li><a href="#">Home</a></li>
                      <li class="active">Shopping Cart</li>
                    </ol>
                </div>
                <div class="table-responsive cart_info">
                    <table class="table table-condensed">
                        <thead>
                            <tr class="cart_menu">
                                <td class="image">Item</td>
                                <td class="description"></td>
                                <td class="price">Price</td>
                                <td class="quantity">Quantity</td>
                                <td class="total">Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ItemCart in product" v-bind:key="ItemCart.id">
                                <td class="cart_product">
                                    <a href=""><img height="150" v-bind:src="ItemCart.product.gallery[0].photo" alt=""></a>
                                </td>
                                <td class="cart_description">
                                    <h4><a href="">{{ ItemCart.product.name }}</a></h4>
                                    <p>Tipe : {{ ItemCart.product.tipe.name }}</p>
                                </td>
                                <td class="cart_price">
                                    <p>{{ ItemCart.product.harga }}</p>
                                </td>
                                <td class="cart_quantity">
                                    <div class="cart_quantity_button">
                                        <a class="cart_quantity_up" href=""> + </a>
                                        <input class="cart_quantity_input" type="text" name="quantity" v-bind:value="ItemCart.quantity" autocomplete="off" size="2">
                                        <a class="cart_quantity_down" href=""> - </a>
                                    </div>
                                </td>
                                <td class="cart_total">
                                    <p class="cart_total_price">$59</p>
                                </td>
                                <td class="cart_delete">
                                    <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section> <!--/#cart_items-->
        <SubCartView/>
    </div>
    <FooterView/>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import router from '@/router'
import SubCartView from '@/components/SubCartView.vue';
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
    export default{
    name: "CartShop",
    components: {
    SubCartView,
    HeaderView,
    FooterView
    },
    setup(){
        
        const route = useRoute()
        let slug = route.params.slug
        // const cart = ref([])
        const product = ref([])
        const getCart = async () => {
            try{
                await axios.get(`api/cart/${slug}`)
                // cart.value = data.cart
            } catch {
                router.replace('/')
            }
        }

        const getProduct = async () => {
            let { data } = await axios.get(`api/cart`)
            product.value = data.cart
            console.log(data.cart)
        }
        onMounted(() => {
            getCart(),
            getProduct()
        });

        return { product }
    },

}
</script>