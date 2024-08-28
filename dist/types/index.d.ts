interface Meta {
  current_page: number;
  per_page: number;
  total: number;
}
interface Comment {
  id: string;
  content: string;
  approved: boolean;
  author_name: string;
  author_email: string;
  site_id: string;
  team_id: string;
  parent_id?: string;
  page_id: string;
  order: number;
  created_at: string;
  updated_at: string;
  children: Comment[];
}
interface CreateCommentRequest {
  content: string;
  author_name: string;
  author_email: string;
  parent_id?: string;
  external_id?: string;
  external_source?: string;
}
interface Site {
  id: string;
  name: string;
  url: string;
  is_active: boolean;
  hold_comments_for_moderation: boolean;
  allow_comments: boolean;
  allow_reactions: boolean;
  user_id: string;
  team_id: string;
}
interface Page {
  id: string;
  title: string;
  slug: string;
  allow_comments: boolean;
  site_id: string;
  team_id: string;
  created_at: string;
  updated_at: string;
}
interface Author {
  id: string;
  name: string;
  email: string;
  team_id: string;
  site_id: string;
  external_id: string;
  external_source: string;
  created_at: string;
  updated_at: string;
}
interface Reaction {
  [key: string]: number;
}
export { Meta, Comment, CreateCommentRequest, Site, Page, Author, Reaction };
