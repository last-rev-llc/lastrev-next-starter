// TODO: replace with correct key for client
const PREFIX_BASE = 'lastrev-next-starter';

const generateKey = (module, key) => {
  return `${PREFIX_BASE}/${module}/${key}`;
};

export default generateKey;
