export interface InternalUrl {
    /** @default "http://localhost:3000" */
    origin: string;
    /** @default "localhost:3000" */
    host: string;
    /** @default "/api/auth" */
    path: string;
    /** @default "http://localhost:3000/api/auth" */
    base: string;
    /** @default "http://localhost:3000/api/auth" */
    toString: () => string;
  }
  
  export default function parseUrl(url?: string): InternalUrl {
    const defaultUrl = new URL("http://localhost:3000/api/auth");
  
    if (url && !url.startsWith("http")) {
      url = `https://${url}`;
    }
  
    const _url = new URL(url ?? defaultUrl);
    const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname)
      .replace(/\/$/, "");
  
    const base = `${_url.origin}${path}`;
  
    return {
      origin: _url.origin,
      host: _url.host,
      path,
      base,
      toString: () => base,
    };
  }