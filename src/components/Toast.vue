<template>
  <div class="toast" :class="[{'active': active}, classPos[position]]" >
    <div class="toast-content">
      <span v-html="message"></span>
    </div>
    <div class="toast-progress-container">
      <div class="toast-progress" :style="`width:${progress}%`"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true },
    position: { type: String, default: 'topRight' },
    duration: { type: Number, default: 3000 }
  },
  data () {
    return {
      classPos: {
        topRight: 'toast-top-right',
        bottomRight: 'toast-bottom-right',
        topLeft: 'toast-top-left',
        bottomLeft: 'toast-bottom-left',
        centerTop: 'toast-center-top',
        center: 'toast-center',
        centerBottom: 'toast-center-bottom'
      },
      className: '',
      active: false,
      progress: 100,
      totalDuration: 0,
      isCountDown: false,
      interval: null
    }
  },
  mounted () {
    this.show()
  },
  methods: {
    init () {
      this.interval = null
      this.class = ''
      // this.message = '';
      this.active = false;
      this.progress = 0;
      this.totalDuration = 0;
      this.isCountDown = false;
    },
    show () {
      this.active = true;
      this.isCountDown = true;
      this.totalDuration = this.duration
      this.countdown(this.duration);
    },
    hide () {
      this.active = false;
      setTimeout(() => {
        this.$emit('remove'); // 通知容器移除這個 Toast
      }, 300); // 等待動畫結束
    },
    countdown (_s) {
      // console.log('開始倒數')
      let ct = _s; // 剩餘時間（毫秒）
      // 每 10 毫秒執行一次，更新進度
      this.interval = setInterval(() => {
        if (ct > 0 && this.isCountDown) {
          ct -= 10;
          this.progress = (ct / this.totalDuration) * 100; // 計算百分比
          // console.log(`剩餘時間: ${ct}ms, 進度: ${this.progress.toFixed(2)}%`);
          if (ct <= 0) {
            clearInterval(this.interval);
            this.hide()
          }
        }
      }, 10);
    }
  },
  beforeUnmount () {
    clearInterval(this.interval)
  }
};
</script>

<style lang="scss" scoped>
.toast {
  // padding: 8px 20px;
  max-width: 250px;
  background: white;
  border-radius: 4px;
  position: fixed;
  // width: 100%;
  z-index: 5;
  overflow: hidden;
  transition: 0.5s;
  text-align: center;
  border: 1px solid #eee;
  opacity: 0;

  .toast-content {
    padding: 12px 20px;
    color: black;
    font-size: 18px;
  }

  .toast-progress-container {
    transform: rotateY(180deg);

    .toast-progress {
      height: 3px;
      background: #3c8dbc;
    }
  }

  &.active {
    transition: 0.5s;
    opacity: 1;
    z-index: 9999;
  }

  // position
  &.toast-top-right {
    top: 30px;
    right: -180px;
    &.active {
      right: 15px;
      top: 30px;
    }
  }

  &.toast-bottom-right {
    bottom: 30px;
    right: -180px;
    &.active {
      right: 15px;
      bottom: 30px;
    }
  }

  &.toast-top-left {
    top: 30px;
    left: -180px;
    &.active {
      left: 15px;
      top: 30px;
    }
  }

  &.toast-bottom-left {
    bottom: 30px;
    left: -180px;
    &.active {
      left: 15px;
      bottom: 30px;
    }
  }

  &.toast-center-top {
    top: -180px;
    left: 50%;
    transform: translate(-50%);
    &.active {
      top: 30px;
    }
  }

  &.toast-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.active {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.toast-center-bottom {
    bottom: -180px;
    left: 50%;
    transform: translate(-50%);
    &.active {
      bottom: 30px;
    }
  }
}
</style>
