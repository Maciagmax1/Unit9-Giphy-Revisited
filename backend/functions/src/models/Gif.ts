import { ObjectId } from "mongodb";

export default interface Gif {
  _id: ObjectId;
  url: string;
  title: string;
}
