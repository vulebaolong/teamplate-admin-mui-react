export const REF_PATH = `seedbox-ref`;

export const ROUTES = {
   ADMIN: {
      base: `admin`,
      HOME: (path?: boolean) => (path ? `` : `${ROUTES.ADMIN.base}`),
   },
   AUTH: {
      base: `auth`,
      LOGIN: (path?: boolean) => (path ? `login` : `${ROUTES.AUTH.base}/login`),
   },
};
