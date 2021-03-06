<template>
  <div class="mainHeader">
    <div class="d-flex justify-content-between px-5 py-3">
      <h4 class="title">Categories</h4>
      <div class="mainHeader-left">
        <b-button v-b-modal.modal-1>Add</b-button>
        <button class="btn btn-primary ml-3">Delete</button>
        <!-- <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal> -->
        <ModalAdd />
      </div>
    </div>
  </div>
</template>

<script>
import ModalAdd from '@/components/modal/index.vue'

export default {
  name: 'MainHeader',
  components: {
    ModalAdd
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
