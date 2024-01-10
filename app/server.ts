import { createRequestHandler, logDevReady } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";
import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";

if (process.env.NODE_ENV === "development") {
	logDevReady(build);
}

const app = new Hono();

app.get("/api/hono", (c) => c.text("Created Hono API Route!!!"));

const remix = createRequestHandler(build, build.mode);

app.mount("/", remix, (c) => ({ env: c.env }));

export const onRequest = handle(app);
