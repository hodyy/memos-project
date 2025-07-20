export type FeaturesDataType = {
  firstArticle: {
    header: string;
    text: string;
  };
  secondArticle: {
    header: string;
    text: string;
  };
  thirdArticle: {
    header: string;
    text: string;
  };
};

export const itemData: FeaturesDataType = {
  firstArticle: {
    header: 'We Create Something New',
    text: 'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.',
  },
  secondArticle: {
    header: '30 New feature pages',
    text: 'Startup Framework contains components and complex blocks which can easily.',
  },
  thirdArticle: {
    header: 'Useful Symbol Components',
    text: 'Samples will show you the feeling on how to play around using the components.',
  },
};

const itemData2 = { ...itemData, firstArticle: { ...itemData.firstArticle, header: 'TEXT2' } };
const itemData3 = { ...itemData, firstArticle: { ...itemData.firstArticle, header: 'TEXT3' } };
const itemData4 = { ...itemData, firstArticle: { ...itemData.firstArticle, header: 'TEXT4' } };
const itemData5 = { ...itemData, firstArticle: { ...itemData.firstArticle, header: 'TEXT5' } };

export const featuresData: FeaturesDataType[] = [
  itemData,
  itemData2,
  itemData3,
  itemData4,
  itemData5,
];
