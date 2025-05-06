export interface Deal {
  id: string;
  title: string;
  contact: string;
  company: string;
  stage: string;
  value: number;
  lastContacted: string;
  notes: string;
}

export interface Suggestion {
  id: string;
  nextBestAction: string;
  emailLine: string;
}
