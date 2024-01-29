import createMiddleware from 'next-intl/middleware';

// A list of all locales that are supported
export const locales = ['en', 'de'];

export default createMiddleware({
  locales,
  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'],
};
