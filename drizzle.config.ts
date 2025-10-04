import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  
  schema: './config/schem.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
