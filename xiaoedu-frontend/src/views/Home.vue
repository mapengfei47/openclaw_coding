<template>
  <div class="home">
    <h1>欢迎使用小鹅前端工程模板 🦐</h1>
    <p>基于 Vue 3 + TypeScript + Vite 构建</p>
    <div class="features">
      <h2>技术栈</h2>
      <ul>
        <li>⚡ Vite - 极速开发体验</li>
        <li>🔷 TypeScript - 类型安全</li>
        <li>🛣️ Vue Router - 路由管理</li>
        <li>🍍 Pinia - 状态管理</li>
        <li>🎨 Element Plus - UI 组件库</li>
        <li>📡 Axios - HTTP 请求</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'HomeView'
})
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding: 40px;

  h1 {
    color: #42b883;
    margin-bottom: 20px;
  }

  .features {
    margin-top: 40px;
    text-align: left;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    ul {
      list-style: none;
      padding: 0;

      li {
        padding: 8px 0;
        font-size: 16px;
      }
    }
  }
}
</style>
