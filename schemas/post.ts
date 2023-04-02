import { defineArrayMember, defineType } from 'sanity';

export default defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'text'
        },
        {
            name: 'publishers',
            type: 'array',
            of: [defineArrayMember({ type: "string"})]
        },
        {
            name: 'painter',
            type: 'person'
        },
        {
            name: 'image',
            type: 'array',
            of: [defineArrayMember({ type: 'images'})]
        }
    ]
});