export interface User {
  id: string;
  email: string | null;
  user_metadata: {
    display_name?: string;
    phone?: string;
  } | null;
  created_at: string;
  updated_at: string | null;
}

export interface Profile extends User {
  display_name: string;
  phone: string;
}
