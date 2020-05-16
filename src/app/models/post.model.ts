import { ParsedDate } from './date.model';

export interface Post {
  id: number;
  location: string;
  time: string;
  author: string;
  text: string;
}

export interface ParsedPost extends Post, ParsedDate {
  summary: string;
  open: boolean;
}
