import { Chapter } from "./chapter.model";

export class Courses{
  constructor(
    public id? : string,
    public title? : string,
    public description? : string,
    public imageUrl? : string,
    public chapters? : Chapter[]

  ){}
}
