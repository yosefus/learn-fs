import { Model, Document } from "mongoose";

interface FilterOptions {
   projection?: any;
   sort?: any;
   skip?: number;
   limit?: number;
   populate?: any;
   lean?: boolean;
   count?: boolean;
   distinct?: string;
   min?: number;
   max?: number;
   search?: string;
   searchFields?: string | string[];
}

class Controller<T extends Document> {
   model: Model<T>;

   constructor(model: Model<T>) {
      this.model = model;
   }

   async findById(id: string, proj?: any): Promise<T | null> {
      const result = await this.model.findById(id, proj).lean() as T | null;
      // if (result && !result.isActive) throw "deleted"
      return result;
   }

   async d(id: string): Promise<T | null> {
      const result = await this.model.findByIdAndDelete(id).lean() as T | null;
      return result;
   }

   async findOne(filter: any = {}, proj?: any): Promise<T | null> {
      const result = await this.model.findOne({ ...filter }, proj).lean() as T | null;
      // if (result && !result.isActive) throw "deleted"
      return result;
   }

   async find(filter: any = {}, proj?: any): Promise<T[]> {
      const result = await this.model.find({ ...filter, isActive: true }, proj).lean() as T[];
      return result;
   }

   async findByIdAndUpdate(id: string, update: any = {}): Promise<T | null> {
      const result = await this.model.findByIdAndUpdate(id, update, { new: true }).lean() as T | null;
      return result;
   }

   async findOneAndUpdate(filter: any = {}, update: any = {}, options: any = {}): Promise<T | null> {
      const result = await this.model.findOneAndUpdate(filter, update,
         { new: true, ...options }
      ).lean() as T | null;
      return result;
   }

   async deleteById(id: string): Promise<T | null> {
      const result = await this.model.findByIdAndUpdate(
         id,
         { isActive: false },
         { new: true }
      ).lean();
      return result as T | null;
   }

   async create(data: any = {}): Promise<T> {
      const result = await this.model.create(data);
      return result;
   }

   async distinct(field: string, filter: any = {}): Promise<any[]> {
      const result = await this.model.distinct(field, filter);
      return result;
   }

   async specialRead(data: any = {}, populate: any): Promise<{ list: T[]; count?: number }> {
      const { filter = {}, sort, from, limit, toCount, search, projection } = data;

      if (search?.text) {
         search.text = new RegExp(search.text.trim().split(' ').join('|'), 'i');
         filter['$or'] = search.fields.map((field: string) => ({ [field]: { $regex: search.text } }));
      }

      let count;
      const list = await this.model.find(filter, projection).sort(sort).skip(from).limit(limit).lean().populate(populate) as T[];
      // @ts-ignore
      if (toCount) count = await this.model.find(filter).count();

      return { list, count };
   }

   async filterModel(filter: any, options: FilterOptions = {}): Promise<any> {
      let { projection, sort, skip, limit, populate, lean, count, distinct, min, max, search, searchFields } = options;

      console.log(filter);
      let or;
      let query = this.model.find(filter);

      if (projection) query.select(projection);
      if (sort) query.sort(sort);
      if (skip) query.skip(skip);
      if (limit) query.limit(limit);
      if (populate) query.populate(populate);
      if (lean) query.lean();
      //@ts-ignore
      if (min) query.min(min);
      //@ts-ignore
      if (max) query.max(max);

      if (search && searchFields) {
         searchFields = Array.isArray(searchFields) ? searchFields : [searchFields];
         or = searchFields.map((field: string) => ({ [field]: new RegExp(search || '', 'i') }));
         //@ts-ignore
         query.or(or);
      }

      let results: any = await query.exec();
      if (distinct) results = await this.model.distinct(distinct, filter);
      if (count) results = { total: await this.model.countDocuments({ ...filter, ...(or ? { '$or': or } : {}) }), results };
      return results;
   }
}


export default Controller;
