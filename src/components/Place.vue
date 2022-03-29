<template>
  <article class="place">
    <h5 class="place-title">
      {{ place.title }}
      <span v-if="place.location">,</span>
      {{ place.location }}
    </h5>
    <h6 v-if="place.academy" class="academy">
      <unicon name="university" fill="#6b385c" height="12" />
      {{ place.academy }}
    </h6>
    <h6 v-if="place.company" class="company">
      <unicon name="desktop" fill="#6b385c" height="12" />
      {{ place.company }}
    </h6>
    <p v-if="place.startDate" class="dates">
      {{ place.startDate }} - {{ place.endDate }}
    </p>
    <p v-if="place.description" class="description">
      {{ place.description }}
    </p>
    <ul v-if="place.descriptionBullets" class="description-bullets">
      <li v-for="(bullet, index) in place.descriptionBullets" :key="index" class="bullet">
        {{ bullet }}
      </li>
    </ul>
  </article>
</template>

<script>
  export default {
    name: 'Place',
    props: {
      place: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .place {
    display: flex;
    flex-direction: column;

    .place-title {
      font-weight: 700;
    }

    .academy {
      font-size: 11px;
    }

    .company {
      padding: $spacer / 4 0;
      margin-left: -$spacer / 4;
    }

    .dates {
      color: $gray-1;
      font-size: $font-size-xs;
      padding: $spacer / 4 0;
    }

    .description {
      margin-top: $spacer / 3;
      font-size: $font-size-sm;
    }

    .description-bullets {
      font-size: $font-size-sm;
      list-style: square;
      padding-right: $spacer * 1.5;
      padding-left: $spacer;
    }
  }
</style>
