// Use type safe message keys with `next-intl`
// type CommonMessages = typeof import([
//   './src/messages/en/common.json',
//   './src/messages/en/home.json'
// ]);
type CommonMessages = typeof import('./src/messages/en/common.json');
declare interface IntlMessages extends CommonMessages {}
type HomeMessages = typeof import('./src/messages/en/home.json');
declare interface IntlMessages extends HomeMessages {}
type PostsMessages = typeof import('./src/messages/en/posts.json');
declare interface IntlMessages extends PostsMessages {}
