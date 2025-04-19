export type ProjectAttributeKey = string;
export type ProjectAttributeData = string | number;

export enum ProjectAttributeType {
  raw = 'raw',
  progress = 'progress',
}

export interface ProjectAttributeValue {
  data: ProjectAttributeData;
  type?: ProjectAttributeType;
}

export interface ProjectAttribute {
  [key: ProjectAttributeKey]: ProjectAttributeData | ProjectAttributeValue;
}

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description?: string;
  attributes: ProjectAttribute;
  images: string[];
}
