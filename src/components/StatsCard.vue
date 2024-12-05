<script setup>
import {formatBytes} from "../utils/utils.js";

const { stats } = defineProps(['stats'])
</script>

<template>

  <div class="hero">
    <a-row :gutter="20">
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card">
          <div class="title">服务器总数</div>
          <div class="value">
            <div class="status" style="background: #005fe7;"></div>
            <span class="num">{{stats.total}} 台</span>
          </div>
        </div>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card">
          <div class="title">在线服务器</div>
          <div class="value">
            <div class="status" style="background: #1fb416;"></div>
            <span class="num">{{stats.online}} 台</span>
          </div>
        </div>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card">
          <div class="title">离线服务器</div>
          <div class="value">
            <div class="status" style="background: #b41616;"></div>
            <span class="num">{{stats.offline}} 台</span>
          </div>
        </div>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card">
          <div class="title">实时带宽</div>
          <div class="value">
            <icon-arrow-up style="font-size: 20px;" />
            <span style="font-size: 16px;"> {{formatBytes(stats.bandwidth_up)}}/s</span>

            <icon-arrow-down style="font-size: 20px;" />
            <span style="font-size: 16px;">{{formatBytes(stats.bandwidth_down)}}/s</span>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="scss">
.hero {
  margin: 30px 10px 0px 10px;

  .hero-card {
    margin-bottom: 20px;
    padding: 12px 24px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    background: #ffffff;
    min-height: 62px;
    box-shadow: 0 2px 4px 0 rgba(133, 138, 180, 0.14);

    .title {
      margin-top: 6px;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 14px;
    }

    .value {
      display: flex;
      align-items: center;
      .status {
        margin-right: 6px;
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: #333333;
      }

      .num {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}

body[arco-theme='dark'] {
  .hero-card {
    border: 1px solid rgb(255 255 255 / 16%);
    box-shadow: none;
    background-color: #000000;
    color: #ffffff;
  }
}
</style>