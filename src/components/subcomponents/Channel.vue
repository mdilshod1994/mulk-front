<template>
  <div class="channel">
    <div class="container container-for-fix">
      <p class="channel__text wrapper-recommendations_text">
        Cамое интересное на нашем
      </p>
      <h1 class="channel__title title-of-sections wrapper-recommendations_title">
        Youtube канале
      </h1>
    </div>
    <div class="wrapper-channel">
      <div class="wrapper-channel__list">
        <div v-for="item in threeLastVideos" :key="item.id" class="wrapper-channel__item">
          <div class="wrapper-channel__video cursor-pointer" @click="modalShowVideo(item)">
            <img :src="textUrl + item.img" alt="tt" class="wrapper-channel__video_img">
            <div class="play_wr">
              <div class="play_btn">
                <img :src="playIcon" alt="" class="iconPlay">
              </div>
            </div>
          </div>
          <h3 class="wrapper-channel__title">
            {{ item.name }}
          </h3>
          <p class="wrapper-channel__desc">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div :class="{active : isOpen}" class="modal-video" @click="closeModalVideo()">
      <div class="modal-video-body">
        <img :src="clsBtn" alt="" class="modal-video-body__btn">
        <div class="modal-video-content" @click.stop="">
          <div v-if="stopPlayVideo" class="modal-video-content__item" v-html="videoItems.link">
            {{ videoItems.link }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      clsBtn: require('../../assets/img/channel/close.svg'),
      videoItems: {},
      playIcon: require('../../assets/img/channel/play.png'),
      isOpen: false,
      textUrl: 'http://dashboard.mulk.tj/uploads/',
      videoToggle: false,
      stopPlayVideo: true
    }
  },
  computed: {
    ...mapGetters(['VIDEOS']),
    threeLastVideos() {
      const size = 3
      let newArray = this.VIDEOS
      return newArray.slice(0, size)
    }
  },
  methods: {
    ...mapActions(['GET_VIDEO']),
    modalShowVideo(item) {
      this.isOpen = true
      this.videoItems = item
      this.videoToggle = true
      this.stopPlayVideo = true
    },
    closeModalVideo() {
      this.isOpen = false
      this.videoToggle = false
      this.stopPlayVideo = false
    },
  },
  mounted() {
    this.GET_VIDEO()
  }
}
</script>
<style>

</style>
