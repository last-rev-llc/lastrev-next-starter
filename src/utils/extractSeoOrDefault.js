export default (pageData) => {
  if (pageData && pageData.seo) return pageData.seo;
  return {
    title: {
      value: 'LastRev Next Starter'
    },
    decription: { value: '' },
    keywords: { value: '' }
  };
};
