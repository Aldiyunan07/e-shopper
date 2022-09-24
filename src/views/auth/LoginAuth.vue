<template>
	<HeaderView/>
<section id="form"><!--form-->
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="rounded-lg border border-success shadow-lg login-form"><!--login form-->
						<h2>Login to your account</h2>
						<form @submit.prevent="login">
							<input type="text"  v-model="credential.email" placeholder="Name" />
							<input type="password" v-model="credential.password" placeholder="Email Address" />
							<span>
								<input type="checkbox" class="checkbox"> 
								Keep me signed in
							</span>
							<button class="btn btn-default">Login</button>
						</form>
					</div><!--/login form-->
				</div>
				<div class="col-sm-1">
					<h2 class="or">OR</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form"><!--sign up form-->
						<h2>New User Signup!</h2>
						<form @submit.prevent="register">
							<input type="text" v-model="form.name" placeholder="Name"/>
							<div class="text-danger text-sm mt-2" v-if="errors['name']">
                                {{ errors['name'][0] }}
                            </div>
							<input type="email" v-model="form.email" placeholder="Email Address"/>
							<div class="text-danger text-sm mt-2" v-if="errors['email']">
                                {{ errors['email'][0] }}
                            </div>
							<input type="password" v-model="form.password" placeholder="Password"/>
							<div class="text-danger text-sm mt-2" v-if="errors['password']">
                                {{ errors['password'][0] }}
                            </div>
							<input type="password" v-model="form.password_confirmation" placeholder="Password"/>
							<div class="text-danger text-sm mt-2" v-if="errors['email']">
                                {{ errors['password_confirmation'][0] }}
                            </div>
							<button type="submit" class="btn btn-default">Signup</button>
						</form>
					</div><!--/sign up form-->
				</div>
			</div>
		</div>
	</section><!--/form-->
</template>
<script>
	import axios from 'axios';
	import store from '@/store'
	import router from '@/router'
    import { reactive, ref } from 'vue';
	import HeaderView from '@/components/HeaderView.vue';
	export default {
    name: "LoginAuth",
    setup() {
		const errors = ref([]);
        const credential = reactive({
            email: "",
            password: ""
        });
		const form = reactive({
			name : "",
			email : "",
			password : "",
			password_confirmation : "",
		})
		
		const register = async() => {
			try{
				await axios.post('register', form)
				await store.dispatch('auth/me')
				router.replace('/')
			} catch (e){
				errors.value = e.response.data.errors;
			}
		}
        const login = async () => {
			await store.dispatch("auth/login", credential)
			console.log(credential)
			router.replace("/")
        };
        return { login, credential, form, register, errors };
    },
    components: { HeaderView }
}
</script>