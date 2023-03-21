export type User = {
  user : {
    id: number,
    email: string,
  },
  email: string,
  activate: string | null,
  accessToken: string
};
