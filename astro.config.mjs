import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bml-2026.party',
  integrations: [tailwind({ applyBaseStyles: false })],
});
