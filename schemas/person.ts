import { defineArrayMember, defineType } from 'sanity';

export default defineType({
    name: 'person',
    type: 'object',
    title: 'Person',
    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'username',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'socials',
            type: 'array',
            of: [defineArrayMember({ type: 'string'})]
        }
    ]
});