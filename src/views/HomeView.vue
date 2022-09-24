<template>
  <HeaderView/>
  <div class="home">
    <CarouselView/>
    <section>
      <div class="container">
        <div class="row">
          <CategoryView/>
          <FeaturView/>
        </div>
      </div>
    </section>
  </div>
  <FooterView/>
</template>

<script>
import CarouselView from '@/components/CarouselView.vue';
import CategoryView from '@/components/CategoryView.vue';
import FeaturView from '@/components/FeaturView.vue';
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
export default {
    name: "HomeView",
    components: {
    CarouselView,
    CategoryView,
    FeaturView,
    HeaderView,
    FooterView
}
}
</script>
