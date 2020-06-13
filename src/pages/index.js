/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from 'src/components/Layout';
import ModuleHero from 'src/components/ModuleHero';
import SectionSplitColumn from 'src/components/SectionSplitColumn';
import SectionCardRows from 'src/components/SectionCardRows';
import mockHero from 'src/components/ModuleHero/ModuleHero.mock';
import mockSectionCardRows from 'src/components/SectionCardRows/SectionCardRows.mock';
import mockSectionSplitColumn from 'src/components/SectionSplitColumn/SectionSplitColumn.mock';

export default () => {
  return (
    <Layout>
      <ModuleHero {...mockHero}/>
      <SectionSplitColumn {...mockSectionSplitColumn} />
      <SectionCardRows {...mockSectionCardRows} />
    </Layout>
  );
};