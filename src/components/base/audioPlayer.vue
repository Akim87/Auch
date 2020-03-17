<template>
  <div class="player">
    <div class="player_header d-flex justify-between">
      <span v-if="currentTrack" class="player_track-title">{{ currentTrack.name }}</span>
      <div class="player-controls d-flex justify-between">
        <button @click="prevTrack">
          <iconPrevTrack/>
        </button>
        <div class="d-flex align-center" @click="play">
          <button v-if="isTimerPlaying">
            <iconPauseTrack/>
          </button>
          <button v-else>
            <iconPlayTrack/>
          </button>
        </div>
        <button @click="nextTrack">
          <iconNextTrack/>
        </button>
      </div>
    </div>
    <div class="progress" ref="progress">
      <div class="progress_bar" @click="clickProgress">
        <div class="progress_current" :style="{ width : barWidth }">
          <iconProgressBarSlider class="progress_slider"/>
        </div>
      </div>
      <div v-if="duration" class="progress__footer d-flex justify-between">
        <span class="progress__time">{{ currentTime }}</span>
        <span class="progress__duration">{{ duration }}</span>
      </div>

    </div>
  </div>
</template>

<script>
import iconPrevTrack from '../icons/iconPrevTrack.vue';
import iconPlayTrack from '../icons/iconPlayTrack.vue';
import iconPauseTrack from '../icons/iconPauseTrack.vue';
import iconNextTrack from '../icons/iconNextTrack.vue';
import iconProgressBarSlider from '../icons/iconProgressBarSlider.vue';

export default {
  name: 'audioPlayer2',
  components: {
    iconPrevTrack,
    iconPlayTrack,
    iconPauseTrack,
    iconNextTrack,
    iconProgressBarSlider,
  },
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
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
      transitionName: null,
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
      this.circleLeft = `${width}%`;
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = `0${durmin}`;
      }
      if (dursec < 10) {
        dursec = `0${dursec}`;
      }
      if (curmin < 10) {
        curmin = `0${curmin}`;
      }
      if (cursec < 10) {
        cursec = `0${cursec}`;
      }
      this.duration = `${durmin}:${dursec}`;
      this.currentTime = `${curmin}:${cursec}`;
    },
    updateBar(x) {
      const { progress } = this.$refs;
      const maxduration = this.audio.duration;
      const position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = `${percentage}%`;
      this.circleLeft = `${percentage}%`;
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = 'scale-in';
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
      this.transitionName = 'scale-out';
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
      this.circleLeft = 0;
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

    // this is optional (for preload covers)
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = element.cover;
      document.head.appendChild(link);
    }
  },
};
</script>

<style scoped lang="scss">
.player {
  background-color: #F8F6F3;
  border: 5px solid $colour-accent;
  border-radius: 21px;
  padding: 1% 2%;

  &_header {
    margin-bottom: 1%;
    min-height: 60px;
  }

  &_track-title {
    align-self: center;
    font-size: 1.5rem;
  }

  &-controls {
  min-width: 160px;
  margin-right: 1%;
    & svg {
      vertical-align: middle;
    }
  }
}

.progress_slider {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

.progress_bar {
  height: 1rem;
  width: 100%;
  cursor: pointer;
  background-color: #EFCDAE;
  display: inline-block;
  border-radius: 9px;
}

.progress_current {
  height: inherit;
  background-color: $colour-accent;
  border-radius: 9px;
  position: relative;
  max-width: 99%;
  }

</style>
