import { RemixServer } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import type { EntryContext } from '@remix-run/cloudflare';

const handleRequest = async (
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
): Promise<Response> => {
	const body = await renderToReadableStream(<RemixServer context={remixContext} url={request.url} />, {
		onError(error: unknown) {
			console.error('[error]', error);
			// eslint-disable-next-line no-param-reassign
			responseStatusCode = 500;
		},
		signal: request.signal,
	});

	if (isbot(request.headers.get('user-agent'))) await body.allReady;

	responseHeaders.set('Content-Type', 'text/html');

	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
};

export default handleRequest;
