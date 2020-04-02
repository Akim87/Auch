<template>
  <div class="player d-flex flex-column">
    <span class="player_date">15 апреля 2019</span>
    <span v-if="$mq === 'sm'" class="player_track-title">{{ currentTrack.name }}</span>
    <div class="player_box" v-bind:class="{ open: showInfo }">
      <div class="player_header d-flex justify-between align-center">
        <span v-if="$mq === 'lg'" class="player_track-title">{{ currentTrack.name }}</span>
        <span class="player_progress-time" v-if="$mq === 'sm'">{{ currentTime }}</span>
        <div class="player_controls d-flex justify-between">
          <button @click="prevTrack">
            <iconPrevTrack />
          </button>
          <div class="d-flex align-center" @click="play">
            <button v-if="isTimerPlaying">
              <iconPauseTrack />
            </button>
            <button v-else>
              <iconPlayTrack />
            </button>
          </div>
          <button @click="nextTrack">
            <iconNextTrack />
          </button>
        </div>
        <span class="player_progress-time" v-if="$mq === 'sm'">{{ duration }}</span>
      </div>
      <div class="player_progress" ref="progress">
        <div class="player_progress-bar" @click="clickProgress">
          <div class="player_progress-current" :style="{ width: barWidth }">
            <iconProgressBarSlider class="player_progress-slider" />
          </div>
        </div>
        <div class="player_footer d-flex justify-between">
          <span class="player_progress-time" v-if="$mq === 'lg'">{{ currentTime }}</span>
          <button
            class="player_dropdown-button d-flex"
            @click="showInfo = !showInfo"
            v-bind:class="{ dropdownActive: showInfo }"
          >
            <dropDownArrow />
          </button>
          <span class="player_progress-time" v-if="$mq === 'lg'">{{ duration }}</span>
        </div>
      </div>
      <transition name="dropdown">
        <p class="player_info" v-if="showInfo">
          В предыдущем эпизоде мы обнаружили, что наши коллеги выгорают из-за неразберихи в
          процессах. У нас нет чётких правил и регламентов: кто, что и как делает. Нужна ли нам
          иерархия? Какую систему управления выбрать? Что такое холакратия и аджайл? Как из хаоса
          выстроить порядок? Обо всём этом мы расспросили руководителя направления эффективности
          внутренних процессов банка «Точка» Дарью Боровикову и Андрея Леушева, основателя
          компании...
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import iconPrevTrack from '../icons/iconPrevTrack.vue';
import iconPlayTrack from '../icons/iconPlayTrack.vue';
import iconPauseTrack from '../icons/iconPauseTrack.vue';
import iconNextTrack from '../icons/iconNextTrack.vue';
import iconProgressBarSlider from '../icons/iconProgressBarSlider.vue';
import dropDownArrow from './dropDownArrow.vue';

export default {
  name: 'audioPlayer',
  components: {
    iconPrevTrack,
    iconPlayTrack,
    iconPauseTrack,
    iconNextTrack,
    iconProgressBarSlider,
    dropDownArrow,
  },
  data() {
    return {
      audio: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      showInfo: false,
      tracks: [
        {
          name: 'Нужна ли нам миссия? Разбираемся, кто мы и зачем',
          source: 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3',
        },
        {
          name: 'Everybody Knows',
          source: 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3',
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      const width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = `${width}%`;
      const durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      const curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (dursec < 10) {
        dursec = `0${dursec}`;
      }
      if (cursec < 10) {
        cursec = `0${cursec}`;
      }
      this.duration = `${durmin || '0'}:${dursec || '00'}`;
      this.currentTime = `${curmin}:${cursec}`;
    },
    updateBar(x) {
      const { progress } = this.$refs;
      const maxduration = this.audio.duration;
      const position = x;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = `${percentage}%`;
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.offsetX);
      console.log(e.offsetX);
    },
    prevTrack() {
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        // eslint-disable-next-line no-plusplus
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        // eslint-disable-next-line no-plusplus
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
  },
  created() {
    const vm = this;
    // eslint-disable-next-line prefer-destructuring
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = () => {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = () => {
      vm.generateTime();
    };
    this.audio.onended = () => {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
  },
};
</script>

<style scoped lang="scss">
.player {
  &_box {
    background-color: #f8f6f3;
    border: 0.25rem solid $colour-accent;
    border-radius: 2rem;
    padding: 2% 3%;
  }
  &_date {
    font-size: 1.375rem;
    align-self: flex-end;
  }

  &_header {
    margin-bottom: 1%;
  }

  &_track-title {
    align-self: center;
    font-size: 1.75rem;
    margin-right: 6%;
    @media screen and (max-width: $mq-mob) {
      margin: 1% 0;
      align-self: flex-end;
    }
  }

  &_controls {
    width: 20%;
    & svg {
      vertical-align: middle;
      height: auto;
      width: 3vw;
    }
    @media screen and (max-width: $mq-mob) {
      width: 25%;
      & svg {
        width: 5vw;
      }
    }
  }

  &_progress-bar {
    height: 1rem;
    width: 100%;
    cursor: pointer;
    background-color: #efcdae;
    display: inline-block;
    border-radius: 9px;
    margin: 1% 0;
  }

  &_progress-current {
    height: inherit;
    background-color: $colour-accent;
    border-radius: 9px;
    position: relative;
  }

  &_progress-slider {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 1.5vw;
  }

  &_footer {
    @media screen and (max-width: $mq-mob) {
      justify-content: center;
      margin: 1% 0;
    }
  }

  &_progress-time {
    font-size: 1.75rem;
    min-width: 10%;
    &:nth-of-type(2) {
      text-align: end;
    }
  }

  &_dropdown-button {
    transition: ease-out 0.2s;
    padding: 1rem;
    margin: -1rem;
  }

  &_info {
    font-size: $font-size-text;
    margin-top: 2%;
  }
}
</style>
