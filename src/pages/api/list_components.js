import Cors from 'cors';
import { list } from '../../components/componentRegistry';

const cors = (req, res) => {
  Cors({
    methods: ['GET']
  })(req, res, (result) => {
    if (result instanceof Error) {
      return Promise.reject(result);
    }
    return Promise.resolve(result);
  });
};

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);
  res.json(list());
}
