import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colorClass",
      title: "Color Class",
      type: "string",
      description: "Tailwind classes for the category badge, e.g. 'bg-blue-50 text-blue-700'",
    }),
  ],
});
