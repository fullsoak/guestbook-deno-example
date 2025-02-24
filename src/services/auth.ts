const mockDb = {
  "auth": [
    // storing password in plaintext is a TERRIBLE practice
    // please do NOT try at home / at work ;)
    { username: "demo", password: "demo" },
  ],
};

export const login = (username?: string, password?: string) => {
  // look for username & matching password in DB
  const match = mockDb.auth.find((entry) =>
    entry.username === username && entry.password === password
  );
  if (match) return true;
  return false;
};
