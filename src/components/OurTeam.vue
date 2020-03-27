<template>
  <div class="our-team">
    <h1 class="title-underlined-right">Наша команда</h1>
    <Hooper ref="carousel" :infiniteScroll="true" :itemsToShow="$mq === 'lg' ? 1 : 1">
      <Slide class="our-team_group d-flex justify-around">
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
      </Slide>
      <Slide class="our-team_group d-flex justify-around">
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
      </Slide>
    </Hooper>
    <button class="our-team_next-group" @click.prevent="slideNext"></button>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import iconFacebook from './icons/iconFacebook.vue';
import iconInstagram from './icons/iconInstagram.vue';

export default {
  name: 'OurTeam',
  components: {
    Hooper,
    Slide,
    iconFacebook,
    iconInstagram,
  },
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
};
</script>

<style scoped lang="scss">

.our-team {
  position: relative;

  &_next-group {
    margin: 1%;
    position: absolute;
    top: 50%;
    right: 3%;
    &::after,
    &::before{
      content: '';
      background-color: $colour-accent;
      height: 3px;
      width: 20px;
      position: absolute;
    }
    &::before {
      transform: rotate(-55deg);
      top: 7px;
    }
    &::after {
      transform: rotate(55deg);
      top: -7px;
    }
  }

  &_item {
    margin: 0 4%;
  }

  &_member-photo {
    align-self: baseline;
    width: 11vw;
  }

  &_member-info {
    width: 60%;
    margin-left: 4%;
  }

  &_member-name {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 2%;
  }

  &_member-contacts-item {
    width: 11%;
    margin: 4% 4% 0 0;
    height: auto;
  }

  &_member-charge {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    line-height: 2.5rem;
  }

}
</style>
