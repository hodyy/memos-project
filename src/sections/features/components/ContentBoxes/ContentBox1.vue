<script setup lang="ts">
import { contentBox1Data } from '@/sections/features/components/ContentBoxes/featuresData.ts';
const { firstArticle, secondArticle, thirdArticle } = contentBox1Data;
</script>

<template>
  <div class="features-content">
    <div class="first-article">
      <h2>{{ firstArticle.header }}</h2>
      <p>
        {{ firstArticle.text }}
      </p>
    </div>
    <div class="second-article">
      <img
        src="@/assets/images/icons/fa-commenting-o.svg"
        alt="pages-logo"
      />
      <h3>{{ secondArticle.header }}</h3>
      <p>{{ firstArticle.text }}</p>
    </div>
    <div class="third-article">
      <img
        src="@/assets/images/icons/diamond.svg"
        alt="diamond-logo"
      />
      <h3>{{ thirdArticle.header }}</h3>
      <p>{{ thirdArticle.text }}</p>
    </div>
  </div>
</template>
<style scoped>
.features-content {
  display: grid;
  width: 600px;
  height: 420px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 29px;
  row-gap: 66px;
}
.first-article {
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  color: white;
}
.second-article {
  height: 187px;
  width: 271px;
}

.third-article {
  height: 187px;
  width: 271px;
}
.first-article h2 {
  all: unset;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
}
.first-article p {
  all: unset;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0;
}
h3 {
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 14px;
}
p {
  all: unset;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  margin-bottom: 10px;
}
</style>
