<template>
  <section class="side-section">
    <h3 class="side-title">
      <unicon :name="icon" fill="white" height="18" class="side-title-icon" />
      {{ title }}
    </h3>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'SideSection',
    props: {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .side-section {
    padding: $spacer / 2 0;
    margin-bottom: $spacer / 2;

    .side-title {
      display: flex;
      align-items: center;
      font-size: 12px;

      .unicon {
        padding-top: 4px;
        margin-left: $spacer / 4;
      }
    }
  }
</style>
