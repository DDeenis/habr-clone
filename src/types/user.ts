export interface User {
  username: string;
  avatar: string;
  notifications?: {
    from: User[];
    action: string;
    article: string;
    date: Date;
  }[];
}
