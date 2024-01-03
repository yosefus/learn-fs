import { Schema, Types, model, models } from "mongoose";

export interface CategoryInterface {
   _id: string;
   name: string;
   image: string;
   lessons: string[];
   color: string
   isActive: boolean;
   isPublish: boolean;
}

const categorySchema = new Schema<CategoryInterface>({
   name: { type: String, required: true },
   image: { type: String },
   color: { type: String },
   lessons: [
      { type: Types.ObjectId, ref: 'blogs' }
   ],
   isActive: { type: Boolean, default: true },
   isPublish: { type: Boolean, default: false },
}, {
   timestamps: true
});

const CategoryModel = models.categories || model<CategoryInterface>("categories", categorySchema);




export default CategoryModel;