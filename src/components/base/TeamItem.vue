<template>
  <div class="our-team_item d-flex justify-center">
    <img class="our-team_member-photo" :src="require(`../../assets/${photo}`)" alt="photo" />
    <div class="our-team_member-info d-flex flex-column">
      <span class="our-team_member-name">{{ name }}</span>
      <p class="our-team_member-charge">{{ description }}</p>
      <div class="our-team_member-contacts">
        <iconFacebook class="our-team_member-contacts-item" />
        <iconInstagram class="our-team_member-contacts-item" />
      </div>
    </div>
  </div>
</template>

<script>
import iconFacebook from '../icons/iconFacebook.vue';
import iconInstagram from '../icons/iconInstagram.vue';

export default {
  name: 'teamItem',
  props: {
    photo: String,
    name: String,
    description: String,
  },
  components: {
    iconFacebook,
    iconInstagram,
  },
};
</script>
