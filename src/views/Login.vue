<template>
  <LayoutDefault>
    <div class="login">
      <div class="container">
        <div class="row">
          <form class="col-4 mx-auto mt-5" @submit.prevent="login()">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>

<script>
import { AUTH } from '../constants/endpoints'
import router from '../router'
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  components: {
    LayoutDefault
  },
  methods: {
    async login() {
      const response = await AUTH.LOGIN({
        email: this.user.email,
        password: this.user.password
      })
      if (!response.errorMessage) {
        localStorage.setItem('token', response.token)
        router.push({ name: 'About' })
      } else {
        console.log('err: ', response.errorMessage.response.data.error)
      }
    }
  }
}
</script>
