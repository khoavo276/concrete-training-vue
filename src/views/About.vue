<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { AUTH } from '../constants/endpoints'
import router from '../router'

export default {
  name: 'About',
  data() {},
  created: function() {
    this.userMe()
  },
  methods: {
    async userMe() {
      const response = await AUTH.USER_ME()
      if (!response.errorMessage) {
        console.log('response: ', response)
      } else {
        console.log('err: ', response.errorMessage.response.data.error)
        router.push({ name: 'Login' })
      }
    }
  }
}
</script>
