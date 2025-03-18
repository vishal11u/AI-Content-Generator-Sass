export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string | null;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  reuired?: boolean;
}

export interface HistoryItem {
  id: number;
  templateSlug: string;
  aiResp: string;
  date: string;
  words: number;
}
