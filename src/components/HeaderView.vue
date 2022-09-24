<template>
	<header id="header"><!--header-->
		<div class="header_top"><!--header_top-->
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="contactinfo">
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> info@domain.com</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="social-icons pull-right">
							<ul class="nav navbar-nav">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header_top-->
		
		<div class="header-middle"><!--header-middle-->
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<router-link to="/"><img src="images/home/logo.png" alt="" /></router-link>
						</div>
						<div class="btn-group pull-right">
							<div class="btn-group">
								<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									USA
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu">
									<li><a href="#">Canada</a></li>
									<li><a href="#">UK</a></li>
								</ul>
							</div>
							
							<div class="btn-group">
								<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									DOLLAR
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu">
									<li><a href="#">Canadian Dollar</a></li>
									<li><a href="#">Pound</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">
								<li><a href="#"><i class="fa fa-star"></i> Wishlist</a></li>
								<li><router-link to="/shop/checkout"><i class="fa fa-crosshairs"></i> Checkout</router-link></li>
								<li><router-link to="/shop/cartshop"><i class="fa fa-shopping-cart"></i> Cart</router-link></li>
								<li class="dropdown" v-if="authenticated">
									<a href="login.html"><i class="fa fa-user"></i> {{ user.name }}</a>
									<ul role="menu" class="sub-menu">
                                        <li><form @submit.prevent="logout"> <button> Logout </button></form></li>
                                    </ul>
								</li>
								<li v-else>
									<router-link to="/login"><i class="fa fa-lock"></i> Login</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-middle-->
	
		<div class="header-bottom"><!--header-bottom-->
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><router-link to="/" class="active">Home</router-link></li>
								<li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><router-link to="/shop">Products</router-link></li>
										<li><router-link to="/shop/detail">Product Details</router-link></li> 
										<li><router-link to="/shop/checkout">Checkout</router-link></li> 
										<li><router-link to="/shop/cartshop">Cart</router-link></li> 
										<li><router-link to="/login">Login</router-link></li> 
                                    </ul>
                                </li> 
								<li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><router-link to="/blog">Blog List</router-link></li>
										<li><router-link to="/blog/detail">Blog Single</router-link></li>
                                    </ul>
                                </li> 
								<li><router-link to="/blankview">404</router-link></li>
								<li><router-link to="/contact">Contact</router-link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-bottom-->
	</header><!--/header-->
</template>
<script>
	import { computed } from 'vue';
	import store from '@/store'
    export default{
        name: 'HeaderView',
		setup(){
			const authenticated = computed(() => store.getters['auth/authenticated'])
			const user = computed(() => store.getters['auth/user'])
			const logout = async() => {
				store.dispatch("auth/logout")
			}
			return { authenticated, user, logout }
		}
    }
</script>