import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'my-ecommerce-database',

  projectId: 'jqe4yhok',
  dataset: 'ecommerce-database',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
