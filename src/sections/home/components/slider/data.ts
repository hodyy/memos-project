import type { SliderContent } from '@/sections/home/components/slider/types.ts';

const content1: SliderContent = {
  h2: 'Startup 3',
  h3: 'Forget About Code',
  text: 'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ',
};
const content2: SliderContent = { h2: 'Startup 4', h3: 'Text 2', text: content1.text };
const content3: SliderContent = { h2: 'Startup 5', h3: 'Text 3', text: content1.text };
const content4: SliderContent = { h2: 'Startup 6', h3: 'Text 4', text: content1.text };
const content5: SliderContent = { h2: 'Startup 7', h3: 'Text 5', text: content1.text };

const sliderData = [content1, content2, content3, content4, content5];
export default sliderData;
