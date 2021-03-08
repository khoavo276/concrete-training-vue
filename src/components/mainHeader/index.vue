<template>
  <div class="mainHeader">
    <div class="d-flex justify-content-between px-5 py-3">
      <h4 class="title">Categories</h4>
      <div class="mainHeader-left">
        <button v-b-modal.modal-add class="btn-add">Add</button>
        <button class="ml-3 btn-delete">Delete</button>
        <ModalAdd :title="'Add New Categories'" :type="'modal-add'" />
        <ModalAdd
          :title="'Edit Categories'"
          :type="'modal-edit'"
          :data="selectItem"
        />
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
  },
  computed: {
    selectItem() {
      return this.$store.state.selectItem
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
