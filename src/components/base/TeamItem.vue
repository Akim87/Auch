<template>
  <div class="d-flex justify-center">
    <img class="team-member_photo" :src="require(`../../assets/${photo}`)" alt="photo" />
    <div class="team-member_info d-flex flex-column">
      <span class="team-member_name">{{ name }}</span>
      <p class="team-member_charge">{{ description }}</p>
      <div class="team-member_contacts">
        <iconFacebook class="team-member_contacts-item" />
        <iconInstagram class="team-member_contacts-item" />
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

<style scoped lang="scss">
.team-member {
  &_photo {
    align-self: baseline;
    width: 11vw;
  }

  &_info {
    width: 40%;
    margin-left: 4%;
  }

  &_name {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 2%;
  }

  &_contacts-item {
    width: 11%;
    margin: 4% 4% 0 0;
    height: auto;
  }

  &_charge {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    line-height: 2.5rem;
  }
}
</style>
