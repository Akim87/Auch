<template>
  <div class="our-team">
    <h1 class="title-underlined-right">Наша команда</h1>
    <transition>
      <div class="our-team_group d-flex justify-between">
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
    </transition>
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
};
</script>

<style scoped lang="scss">

.our-team {
  margin-bottom: 10%;

  &_group{
    width: 75%;
    margin: 0 auto;
  }

  &_member-info{
    max-width: 390px;
  }

}
</style>
