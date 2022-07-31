import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: String,
  subcategories: [
    {
      category_id: { type: mongoose.Schema.Types.ObjectId },
      name: String,
      subsubcategories: [
        {
          sub_categories_id: { type: mongoose.Schema.Types.ObjectId },
          name: String,
        },
      ],
    },
  ],
});

const CategoryModel = mongoose.model('categories', categorySchema);

export default CategoryModel;
