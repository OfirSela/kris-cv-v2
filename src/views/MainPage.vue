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
      <SideSection icon="english-to-chinese" title="languages">
        <Languages />
      </SideSection>
      <SideSection icon="shield" title="Military Service">
        <h5 class="field-label">
          2008-2011
        </h5>
        <p class="army-service">
         Armory command center - Air force.
        </p>
        <ul class="description-bullets">
          <li class="bullet">
            Micro managing situations
          </li>
        </ul>
      </SideSection>
      <SideSection icon="heart-medical" title="Programming Languages">
        <ul class="programming-languages">
          <li v-for="prog in volunteerings" :key="prog.key" class="prog">
            <p class="prog-title">
              {{ prog.title }}
            </p>
            <div class="prog-value">
              <div class="progress" :class="`level-${prog.value}`" />
            </div>
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
            :company="section.company"
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
      name: 'Ofir Salomon',
      role: 'Computer science student and Junior developer',
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
      font-size: $font-size-sm;

      .programming-languages {
        .prog {
          margin-bottom: $spacer / 2;

            .prog-value {
              width: 90%;
              height: 5px;
              border-radius: 1px;
              background: $bright;

              .progress {
                background: $white;
                height: 5px;

                &.level-1 {
                  width: 20%;
                }

                &.level-2 {
                  width: 40%;
                }

                &.level-3 {
                  width: 60%;
                }

                &.level-4 {
                  width: 80%;
                }

                &.level-5 {
                  width: 100%;
                }
              }
            }

          .prog-title {
            font-size: $font-size-sm;
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
          font-size: $font-size-lg;
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
