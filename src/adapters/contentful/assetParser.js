export default (obj) => {
  const {
    fields: {
      title,
      description,
      file: {
        url,
        details: {
          size,
          image: { width, height }
        },
        fileName: filename,
        contentType
      }
    }
  } = obj;
  return {
    title,
    description,
    url,
    size,
    width,
    height,
    filename,
    contentType
  };
};
