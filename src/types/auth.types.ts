export interface SpotifySession {
  user: {
    name: string;
    email: string;
    image: string;
  };
  token: {
    accessToken: string;
    exp: number;
    iat: number;
    jti: string;
    name: string;
    picture: string;
    providerAccountId: string;
    refreshToken: string;
    sub: string;
    tokenType: string;
  };
}

export interface SupabaseError {
  message: string;
  status?: number;
}
