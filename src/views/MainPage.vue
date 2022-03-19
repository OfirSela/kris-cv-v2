<template>
  <div class="container">
    <aside class="side">
      <SideSection
        icon="user-square"
        title="Personal info"
      >
        <ul class="fields">
          <li v-for="field in personalFields" :key="field.key" class="field">
            <h5 class="field-label">
              {{ field.label }}
            </h5>
            <p class="field-value">
              {{ field.value }}
            </p>
          </li>
        </ul>
      </SideSection>
      <SideSection icon="english-to-chinese" title="שפות">
        <Languages />
      </SideSection>
      <SideSection icon="shield" title="שירות צבאי">
        <h5 class="field-label">
          2009-2011
        </h5>
        <p class="army-service">
          ראש לשכת אטק"ל
        </p>
        <ul class="description-bullets">
          <li class="bullet">
            ניהול קשרי החוץ של הלשכה
          </li>
          <li class="bullet">
            קידום שיתופי פעולה ונושאים אשר על סדר היום הארגוני
          </li>
        </ul>
      </SideSection>
      <SideSection icon="heart-medical" title="התנדבויות">
        <ul class="volunteerings">
          <li v-for="volunteering in volunteerings" :key="volunteering.key" class="volunteering">
            <h5 class="volunteering-dates">
              {{ volunteering.dates }}
            </h5>
            <p class="volunteering-title">
              {{ volunteering.title }}
            </p>
            <p class="volunteering-description">
              {{ volunteering.description }}
            </p>
          </li>
        </ul>
      </SideSection>
    </aside>
    <main class="main">
      <section class="primary-info">
        <div class="gap" />
        <div class="info">
          <h1 class="name">
            {{ name }}
          </h1>
          <h2 class="role-summary">
            {{ role }}
          </h2>
        </div>
      </section>
      <ul class="sections">
        <li v-for="section in sections" :key="section.key" class="section">
          <Section
            :iconName="section.icon"
            :title="section.title"
            :places="section.places"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  import personalFields from '@/data/personal';
  import sections from '@/data/sections';
  import volunteerings from '@/data/volunteerings';
  import Languages from '@/components/Languages';
  import Section from '@/components/Section';
  import SideSection from '@/components/SideSection';

  export default {
    name: 'MainPage',
    components: {
      Section,
      SideSection,
      Languages,
    },
    data: () => ({
      name: 'קריסטינה קרפה קורבוט אוריה',
      role: 'מטפלת בשיטת אלבאום',
    }),
    computed: {
      sections() {
        return sections;
      },
      personalFields() {
        return personalFields;
      },
      volunteerings() {
        return volunteerings;
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  @mixin connector() {
    &::after {
      content: '';
      position: absolute;
      bottom: $spacer * -1.4;
      right: $spacer * 0.8;
      // transform: translateY(40%);
      width: 5px;
      background: $primary;
      height: 100%;
    }
  }

  .container {
    width: 800px;
    display: grid;
    grid-template-columns: 27% 73%;

    .side {
      padding: $spacer * 2 $spacer;
      background: $primary;
      color: $light;

      .volunteerings {
        .volunteering {
          margin-bottom: $spacer / 2;

          .volunteering-dates {
            color: $gray-2;
            font-size: $font-size-sm;
          }

          .volunteering-title {
            font-size: $font-size-sm;
          }

          .volunteering-description {
            font-size: $font-size-xs;
          }
        }
      }

      .field {
        font-size: $font-size-sm;
        margin-bottom: $spacer / 3;
      }

      .field-label {
        color: $gray-2;
      }
    }

    .main {
      padding: $spacer * 2 $spacer;
      background: $white;
      color: black;

      .primary-info {
        @include gridded();

        .name {
          font-size: $font-size-huge;
        }

        .role-summary {
          font-size: $font-size-xl;
        }
      }

      .sections {
        margin-top: $spacer;
      }

      .section {
        position: relative;
        @include connector();

        &:last-of-type {
          &::after {
            content: none;
          }
        }
      }
    }
  }

  .section {
    & + & {
      margin-top: $spacer / 2;
    }
  }

  .description-bullets {
    font-size: $font-size-sm;
    list-style: square;
    padding-right: $spacer * 1.5;
  }

  .bullet {
    & + & {
      margin-top: $spacer / 6;
    }
  }
</style>
