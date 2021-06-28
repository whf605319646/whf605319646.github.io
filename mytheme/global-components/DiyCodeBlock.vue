<template>
  <div class="theme-code-block" :class="{ 'theme-code-block__active': active }">
    <slot />
    <!-- <a :href="playgroundUrl" target="_blank" class="theme-code-block-playground-icon"> playground </a> -->
    <div class="theme-code-block-playground" title="CodeSandBox" v-on:click="toPlayground()">
      <i class="my-iconfont icon-sandbox" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiyCodeBlock',
  data() {
    return {
      playgroundUrl: 'http://www.baidu.com'
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toPlayground: function() {
      let componentId = "g-thumbnail-viewer";
      let url = this.playgroundUrl + "?componentId=" + componentId;
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.theme-code-block {
  display: none;
}
.theme-code-block__active {
  display: block;
}
.theme-code-block > pre {
  background-color: orange;
}
@media (max-width: 419px) {
  .theme-code-group div[class*='language-'] {
    margin: 0;
  }
}
.theme-code-block-playground {
    text-align: right;
    margin-right: 20px;
    cursor: pointer;
}

.theme-code-block-playground:hover {
  color: #11a8cd;
}
</style>
