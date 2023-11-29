import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas';
import { media } from 'sanity-plugin-media'
import { defaultDocumentNodeResolver, myStructure } from './deskStructure'
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Softlog',
  title: 'Softlog',
  projectId: '563vqiqh',
  dataset: 'production',
  plugins:
    [
      deskTool({
        defaultDocumentNode: defaultDocumentNodeResolver,
        structure: myStructure,
      }),
      // deskTool(),
      visionTool(),
      media(),
    ],

  schema: {
    types: schemaTypes,
  },
})
