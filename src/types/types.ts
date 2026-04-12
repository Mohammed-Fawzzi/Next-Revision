export type postsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type FormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  remember?: boolean;
};
