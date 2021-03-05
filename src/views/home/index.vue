<template>
  <LayoutDefault>
    <div class="Home">
      <Slide />
      <TopBanner />
      <List title="BEST SELLER" />
      <BotBanner />
      <Social />
    </div>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import Slide from '@/components/slideHome/index.vue'
import TopBanner from '@/components/topBanner/index.vue'
import List from '@/components/listItems/index.vue'
import BotBanner from '@/components/botBanner/index.vue'
import Social from '@/components/social/index.vue'

export default {
  name: 'Home',
  components: {
    LayoutDefault,
    Slide,
    TopBanner,
    List,
    BotBanner,
    Social
  }
}
</script>
