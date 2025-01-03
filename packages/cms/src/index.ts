export interface Article {
  title: string;
  slug: string;
  content: string;
  publishedAt: string;
}

export interface Author {
  name: string;
  email: string;
  bio?: string;
}
