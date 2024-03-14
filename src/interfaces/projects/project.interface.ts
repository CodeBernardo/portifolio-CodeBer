export interface Project {
  name: string
  deploy?: string | undefined
  github: string
  techs: string[]
  description: string
  preview?: string | undefined
}