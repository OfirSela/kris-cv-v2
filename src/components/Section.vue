<template>
  <section class="section">
    <div class="section-header">
      <div class="section-icon">
        <unicon v-if="iconName" :name="iconName" :fill="iconColor" height="18" />
      </div>
      <h4 class="section-title">
        {{ title }}
      </h4>
      <h5 class="section-company">
        {{ company }}
      </h5>
    </div>
    <div class="section-content">
      <div class="gap" />
      <ul class="places">
        <li v-for="(place, index) in places" :key="index" class="place">
          <Place :place="place" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Place from '@/components/Place';

  export default {
    name: 'Section',
    components: {
      Place,
    },
    props: {
      iconName: {
        type: String,
        default: null,
      },
      iconColor: {
        type: String,
        default: 'white',
      },
      title: {
        type: String,
        required: true,
      },
        company: {
        type: String,
      },
      places: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .section {
    padding :0;

    .section-header {
      @include gridded();

      .section-icon {
        padding: 4px;
        padding-top: 6px;
        background: $primary;
      }

      .section-title {
        padding: 0 $spacer / 2;
        width: fit-content;
        background: $primary;
        color: $light;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .section-company{
        padding: 0 $spacer / 2;
        width: fit-content;
        background: $primary;
        color: $light;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .section-content {
      margin-top: $spacer / 2;
      @include gridded();
    }
  }

  .place {
    & + & {
      margin-top: $spacer * 0.75;
    }
  }
</style>
