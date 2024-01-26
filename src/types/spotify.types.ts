export interface ExternalUrls {
  spotify: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface User {
  id: string;
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  images: SpotifyImage[];
  type: string;
  uri: string;
}
