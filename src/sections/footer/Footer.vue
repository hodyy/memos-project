<script setup lang="ts">
import { footerData } from '@/sections/footer/data/data.ts';
</script>

<template>
  <footer>
    <div class="wrapper">
      <div class="info-section">
        <h2>{{ footerData.header }}</h2>
        <div class="medias">
          <a
            v-for="(item, index) in footerData.topMenuTexts"
            :key="index"
            >{{ item }}
          </a>
          <a
            v-for="(item, index) in footerData.topMenuIcons"
            :key="index"
          >
            <img
              :src="item.src"
              :alt="item.name"
            />
          </a>
        </div>
      </div>
      <hr class="line" />
      <div class="nav-section">
        <ul>
          <li
            v-for="(item, index) in footerData.bottomMenu"
            :key="index"
          >
            <a>{{ item }}</a>
          </li>
        </ul>
        <div class="copyright notice">{{ footerData.copyrightNotice }}</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 240px;
  height: 100%;
  padding-top: 30px;
}
.wrapper {
  display: flex;
  width: 1170px;
  flex-direction: column;
  gap: 46px;
}
.info-section {
  height: 30px;
  display: flex;
  justify-content: space-between;
}
h2 {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.29px;
}
.line {
  width: 100%;
  border: 2px solid white;
  opacity: 0.3;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0 28px;
  margin: 0;
  padding: 0;
}
.nav-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.medias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0 27px;
}
img {
  width: 15px;
  height: 15px;
}
div,
li {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
}
@media (max-width: 550px) {
  .nav-section {
    flex-direction: column;
  }
  .medias,
  ul {
    gap: 10px;
  }
  .info-section {
    flex-direction: column;
  }
  h2{
    text-align: center;
    align-items: center;
  }
}
</style>
