import { Document, Schema, model, Types, models } from 'mongoose';

export interface BlogContent {
   _id: string;
   href: string;
   content: string;
   index: number;
   type: string;
}

export interface BlogInterface {
   _id: string;
   content: BlogContent[];
   description: string;
   keywords: string;
   category: string;
   creator: Types.ObjectId;
   isActive: boolean;
   isPublish: boolean;
   createdAt: Date;
   updatedAt: Date;
   title: string;
   img: string;
}

export interface BlogDocument extends Document {
   content: BlogContent[];
   description: string;
   keywords: string;
   category: string;
   creator: Types.ObjectId;
   isActive: boolean;
   isPublish: boolean;
   createdAt: Date;
   updatedAt: Date;
   title: string;
   img: string;
   // Add more properties as needed
}


const contentSchema = new Schema<BlogContent>(
   {
      href: { type: String },
      content: { type: String },
      index: { type: Number },
      type: { type: String },
   }
)

const blogSchema = new Schema<BlogDocument>(
   {
      content: [contentSchema],
      description: { type: String, required: true },
      keywords: { type: String, required: true },
      category: { type: String, required: true },
      creator: { type: Schema.Types.ObjectId, ref: 'User',  },
      isActive: { type: Boolean, default: true },
      isPublish: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
      title: { type: String, required: true },
      img: { type: String },
      // Add more properties as needed
   },
   { timestamps: true } // Adds createdAt and updatedAt automatically
);

const BlogModel = models.blogs || model<BlogDocument>('blogs', blogSchema);

export default BlogModel;
