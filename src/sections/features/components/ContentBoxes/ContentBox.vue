<script setup lang="ts">
import { defineProps } from 'vue';
import type { FeaturesDataType } from '@/sections/features/components/ContentBoxes/featuresData.ts';

const props = defineProps<{ data: FeaturesDataType }>();
const { firstArticle, secondArticle, thirdArticle } = props.data;
</script>

<template>
  <div class="wrapper">
    <div class="first-article">
      <h2>{{ firstArticle.header }}</h2>
      <p class="paragraphStyle500">
        {{ firstArticle.text }}
      </p>
    </div>
    <div class="bottom-articles-wrapper">
      <div class="second-article">
        <img
          src="@/assets/images/icons/fa-commenting-o.svg"
          alt="pages-logo"
        />
        <h3>{{ secondArticle.header }}</h3>
        <p>{{ secondArticle.text }}</p>
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
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  min-height: 420px;
  max-height: 420px;
  height: 100%;
  flex-direction: column;
  gap: 67px;
  justify-content: center;
}
.bottom-articles-wrapper {
  display: flex;
  justify-content: space-between;
}
.first-article {
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  color: white;
}
.second-article {
  max-width: 271px;
  width: 100%;
}
.third-article {
  max-width: 271px;
  width: 100%;
}
.first-article h2 {
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
  margin: 0 0 16px;
}
.first-article p {
  margin: 0;
}
h3 {
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.second-article p,
.third-article p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
}
@media (max-width: 800px) {
  .wrapper {
    width: 500px;
    gap: 30px;
  }
  .first-article h2 {
    font-size: 30px;
  }
  .first-article p {
    font-size: 20px;
    line-height: 25px;
  }
  .bottom-articles-wrapper {
    gap: 10px;
  }
}
@media (max-width: 600px) {
  .wrapper {
    width: 250px;
  }
  img {
    width: 20px;
  }
  h3 {
    font-size: 15px;
  }
  .first-article h2 {
    font-size: 20px;
    line-height: 25px;
  }
  .first-article p,
  .second-article p,
  .third-article p {
    font-size: 15px;
    line-height: 100%;
  }
  h3 {
    line-height: 100%;
    font-size: 10px;
  }
}
</style>
