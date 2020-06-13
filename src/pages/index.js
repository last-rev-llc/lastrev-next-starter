import React from 'react';
import Layout from 'src/components/Layout';
import ModuleHero from 'src/components/ModuleHero';
import SectionSplitColumn from 'src/components/SectionSplitColumn';
import SectionCardRows from 'src/components/SectionCardRows';

export default () => {
  return (
    <Layout>
      <ModuleHero />
      <SectionSplitColumn />
      <SectionCardRows />
    </Layout>
  );
};