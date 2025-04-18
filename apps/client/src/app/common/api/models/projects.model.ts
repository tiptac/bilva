export enum ContractType {
  Labor = 'Labor',
  Material = 'Material',
}
export interface Project {
  id: number;
  title: string;
  description?: string;
  thumbnail: string;
  size: number;
  levels: string;
  contractType: ContractType;
  completion: number;
}
