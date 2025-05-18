import { createCookieSessionStorage } from '@remix-run/cloudflare'
import invariant from 'tiny-invariant'

const SESSION_SECRET = process.env.SESSION_SECRET
invariant(SESSION_SECRET, 'SESSION_SECRET must be set')

export const { getSession, commitSession, destroySession } =
	createCookieSessionStorage({
		// a Cookie from `createCookie` or the same CookieOptions to create one
		cookie: {
			name: '__session',
                       secrets: [SESSION_SECRET],
			sameSite: true,
			httpOnly: true,
		},
	})
