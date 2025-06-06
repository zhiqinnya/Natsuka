<script setup>
import { formatBandwithBytes, formatBytes } from '../utils/utils.js'
import { ArrowUp, ArrowDown } from '@vicons/carbon'

const emit = defineEmits(['handleChangeType'])

const { stats, type } = defineProps({
  stats: {
    type: Object,
    default: () => ({
      total: 0,
      online: 0,
      offline: 0,
      bandwidth_up: 0,
      bandwidth_down: 0
    })
  },
  type: {
    type: String,
    default: 'all'
  }
})
</script>

<template>
  <n-grid cols="3" item-responsive>
    <n-grid-item class="status-gi" span="3 800:1">
      <n-card
        hoverable
        title="服务器总数"
        class="card-selector all"
        :class="type === 'all' ? 'is-active' : ''"
        @click="emit('handleChangeType', 'all')"
      >
        <n-el class="value">
          <div class="status" style="background: #005fe7"></div>
          <span class="num">{{ stats.total }} 台</span>
        </n-el>
      </n-card>
    </n-grid-item>
    <n-grid-item class="status-gi" span="3 800:1">
      <n-card
        hoverable
        title="在线服务器"
        class="card-selector online"
        :class="type === 'online' ? 'is-active' : ''"
        @click="emit('handleChangeType', 'online')"
      >
        <n-el class="value">
          <div class="status" style="background: #1fb416"></div>
          <span class="num">{{ stats.online }} 台</span>
        </n-el>
      </n-card>
    </n-grid-item>
    <n-grid-item class="status-gi" span="3 800:1">
      <n-card
        hoverable
        title="离线服务器"
        class="card-selector offline"
        :class="type === 'offline' ? 'is-active' : ''"
        @click="emit('handleChangeType', 'offline')"
      >
        <n-el class="value">
          <div class="status" style="background: #b41616"></div>
          <span class="num">{{ stats.offline }} 台</span>
        </n-el>
      </n-card>
    </n-grid-item>
  </n-grid>
  <n-card title="网络情况">
    <n-el class="value" style="display: block">
      <n-el>
        流量
        <n-icon style="font-size: 14px">
          <ArrowUp style="color: #d09453" />
        </n-icon>
        <span style="font-size: 14px; color: #d09453"> {{ formatBytes(stats.traffic_up) }}</span>
        &nbsp;
        <n-icon style="font-size: 14px">
          <ArrowDown style="color: #9a5fcd" />
        </n-icon>
        <span style="font-size: 14px; color: #9a5fcd">{{ formatBytes(stats.traffic_down) }}</span>
      </n-el>
      <n-el>
        带宽
        <n-icon style="font-size: 14px">
          <ArrowUp />
        </n-icon>
        <span style="font-size: 14px"> {{ formatBandwithBytes(stats.bandwidth_up) }}</span>
        &nbsp;
        <n-icon style="font-size: 14px">
          <ArrowDown />
        </n-icon>
        <span style="font-size: 14px"> {{ formatBandwithBytes(stats.bandwidth_down) }}</span>
      </n-el>
    </n-el>
  </n-card>
</template>

<style scoped lang="scss">
.n-icon {
  transform: translateY(2px);
}

.status-gi:first-child {
  margin-left: 0;
}

.status-gi {
  margin-left: 15px;
  margin-bottom: 15px;
}

.card-selector {
  cursor: pointer;
}

.n-card {
  //background: #ffffff;

  &.is-active,
  &:hover {
    &.all {
      border-color: #005fe7;
    }

    &.online {
      border-color: #1fb416;
    }

    &.offline {
      border-color: #b41616;
    }
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

@media screen and (max-width: 800px) {
  .status-gi {
    margin-left: 0;
  }
}
</style>
