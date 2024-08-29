export type Job = {
  title: string;
  type: string;
  level: string;
  location: string | null;
  is_active: boolean;
};

export type JobByType = {
  title: string;
  location: string;
  path: string;
};
