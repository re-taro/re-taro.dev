import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import { getLoadContext } from '../app/load-context';
// @ts-ignore - the server build file is generated by `remix vite:build`
import * as build from '../build/server';

// @ts-ignore - typeof import("../build/server") returns the object as expected
export const onRequest = createPagesFunctionHandler({ build, getLoadContext });
