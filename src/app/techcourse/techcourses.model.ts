import { Courses } from "./courses.model";

export class Techcourse{
  static id: number;
  constructor(
   public id? : string,
   public title? : string,
   public description? : string,
  public  imageUrl? : string,
   public courses? : Courses[]
  ){}
}
