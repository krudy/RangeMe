import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  // Rest of the API logic
  const inputText = req.query.tags;
  const rsp = await fetch(
    `https://www.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=true&tags=${inputText}`,
  );
  const json = await rsp.json();
  res.json(json);
}
