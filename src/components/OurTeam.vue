<template>
  <div class="our-team">
    <h1 class="title-underlined-right">Наша команда</h1>
    <transition>
      <div class="our-team_group d-flex justify-between" v-if="isActive == 1">
        <div class="our-team_item d-flex">
          <img class="our-team_member-photo" src="../assets/team-photo1.png" alt="photo">
          <div class="our-team_member-info d-flex flex-column">
            <span class="our-team_member-name">Екатерина Кронгауз</span>
            <p class="our-team_member-charge">
              Работала на телеканале «Дождь»,
              возглавляла издание snob.ru,
              создала отдел подкастов в «ауч»</p>
            <div class="our-team_member-contacts">
              <iconFacebook class="our-team_member-contacts-item"/>
              <iconInstagram class="our-team_member-contacts-item"/>
            </div>
          </div>
        </div>
        <div class="our-team_item d-flex">
          <img class="our-team_member-photo" src="../assets/team-photo2.png" alt="photo">
          <div class="our-team_member-info d-flex flex-column">
            <span class="our-team_member-name">Лика Кремер</span>
            <p class="our-team_member-charge">
              Работала на телеканале «Дождь»,
              возглавляла издание snob.ru,
              создала отдел подкастов в «ауч»</p>
            <div class="our-team_member-contacts">
              <iconFacebook class="our-team_member-contacts-item"/>
              <iconInstagram class="our-team_member-contacts-item"/>
            </div>
          </div>
        </div>
      </div>
      <div class="our-team_group d-flex justify-between" v-if="isActive == 2">
        <div class="our-team_item d-flex">
          <img class="our-team_member-photo" src="../assets/team-photo3.png" alt="photo">
          <div class="our-team_member-info d-flex flex-column">
            <span class="our-team_member-name">Екатерина Кронгауз</span>
            <p class="our-team_member-charge">
              Работала на телеканале «Дождь»,
              возглавляла издание snob.ru,
              создала отдел подкастов в «ауч»</p>
            <div class="our-team_member-contacts">
              <iconFacebook class="our-team_member-contacts-item"/>
              <iconInstagram class="our-team_member-contacts-item"/>
            </div>
          </div>
        </div>
        <div class="our-team_item d-flex">
          <img class="our-team_member-photo" src="../assets/team-photo4.png" alt="photo">
          <div class="our-team_member-info d-flex flex-column">
            <span class="our-team_member-name">Лика Кремер</span>
            <p class="our-team_member-charge">
              Работала на телеканале «Дождь»,
              возглавляла издание snob.ru,
              создала отдел подкастов в «ауч»</p>
            <div class="our-team_member-contacts">
              <iconFacebook class="our-team_member-contacts-item"/>
              <iconInstagram class="our-team_member-contacts-item"/>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <button class="our-team_next-group"></button>
  </div>
</template>

<script>
import iconFacebook from './base/iconFacebook.vue';
import iconInstagram from './base/iconInstagram.vue';

export default {
  name: 'OurTeam',
  components: {
    iconFacebook,
    iconInstagram,
  },
  data() {
    return {
      isActive: 1,
    };
  },
};
</script>

<style scoped lang="scss">

.our-team {
  margin-bottom: 10%;
  position: relative;

  &_group {
    width: 80%;
    margin: 0 auto;
  }

  &_next-group {
    position: absolute;
    top: 50%;
    right: 7%;
    &::after,
    &::before{
      content: '';
      background-color: $colour-accent;
      height: 4px;
      width: 40px;
      position: absolute;
    }
    &::before {
      transform: rotate(-60deg);
      top: 16px;
    }
    &::after {
      transform: rotate(60deg);
      top: -16px;
    }
  }

  &_item {
    margin-right: 4%;
  }

  &_member-photo {
    height: fit-content;
  }

  &_member-info {
    max-width: 390px;
    margin-left: 4%;
  }

  &_member-name {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 2%;
  }

  &_member-contacts-item {
    width: 50px;
    margin-right: 4%;
  }

  &_member-charge {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    line-height: 2.5rem;
  }

}
</style>
