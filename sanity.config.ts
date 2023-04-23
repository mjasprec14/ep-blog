import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@sanity-schemas';

const config = defineConfig({
  projectId: 'kxwuzftt',
  dataset: 'production',
  title: 'Emmanuel Piñol Blog',
  apiVersion: '2023-04-24',
  useCdn: true,
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default config;
