<template>
  <div class="mainHeader">
    <div class="d-flex justify-content-between px-5 py-3">
      <h4 class="title">Categories</h4>
      <div class="mainHeader-left">
        <b-button v-b-modal.modal-add>Add</b-button>
        <button class="btn btn-primary ml-3">Delete</button>
        <ModalAdd :title="'Add New Categories'" :type="'modal-add'" />
        <ModalAdd :title="'Edit Categories'" :type="'modal-edit'" />
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
