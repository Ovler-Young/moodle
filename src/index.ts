import useReflare from 'reflare';

const handleRequest = async (
  request: Request,
): Promise<Response> => {
  const reflare = await useReflare();

  reflare.push({
    path: '/*',
    upstream: {
      domain: 'bog.ac',
      protocol: 'http',
    },
  });

  return reflare.handle(request);
};

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
