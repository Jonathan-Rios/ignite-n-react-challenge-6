export interface ICategoriesOnBooks {
  book_id: string;
  categoryId: string;
}

export interface ICategory {
  id: string;
  name: string;
  books: ICategoriesOnBooks[];
}

export interface IRating {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book_id: string;
  user_id: string;
}

export interface IBook {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: string;

  categories: ICategoriesOnBooks[];
  ratings: IRating[];
}

export interface IUser {
  id: string;
  name: string;
  avatar_url: string;
  created_at: string;

  accounts: IAccount[];
  sessions: ISession[];
  ratings: IRating[];
}

interface IAccount {
  id: string;
  user_id: string;
  type: string;
  provider: string;
  provider_account_id: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user: IUser;
}

interface ISession {
  id: string;
  session_token: string;
  user_id: string;
  expires: string;
  user: IUser;
}
