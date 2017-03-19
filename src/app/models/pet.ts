import { Category } from './category';
import { Tag } from './tag';
import { Status } from './status';

export class Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: Array<string>;
  tags: Array<Tag>;
  status: Status;
}