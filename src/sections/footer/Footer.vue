<script setup lang="ts">
import { footerData } from '@/sections/footer/data/data.ts';
</script>

<template>
  <footer>
    <div class="wrapper">
      <div class="info-section">
        <h2>Startup 3</h2>
        <div class="medias">
          <div>Privacy Policy</div>
          <div>Terms</div>
          <img
            src="@/assets/images/icons/fa-twitter.svg"
            alt="twitter-icon"
          />
          <img
            src="@/assets/images/icons/fa-facebook-square.svg"
            alt="facebook-icon"
          />
          <img
            src="@/assets/images/icons/fa-google-plus.svg"
            alt="google-icon"
          />
        </div>
      </div>
      <hr class="line" />
      <div class="nav-section">
        <ul>
          <li
            v-for="(item, index) in footerData"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <div class="copyright notice">© 2025. All rights reserved.</div>
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
  height: 240px;
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
  gap: 28px;
  margin: 0;
  padding: 0;
}
.nav-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.medias {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
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
</style>
