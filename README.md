# Vamsi Krishna & Neelima — TheSoulfulInks

A public static wedding invitation. No login, authentication, database, or environment variables are required.

## Vercel

Import this directory as a new Vercel project. Select Other for the framework, leave the build command empty, and set the output directory to `dist`. The included vercel.json supplies these settings.

Or run `vercel --prod` from this directory after signing in with `vercel login`.

Disable Vercel Deployment Protection for the guest-facing production domain if enabled by the account's defaults.

Guest routes: `/`, `/groom/`, `/bride/`.
