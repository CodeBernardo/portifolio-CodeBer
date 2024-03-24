export interface Project {
  name: string;
  type: string;
  deploy?: string | undefined;
  github: string;
  techs: JSX.Element[];
  description: string;
  preview?: string | undefined;
}
