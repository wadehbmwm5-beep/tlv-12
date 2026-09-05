// Import and inject Vercel Web Analytics
import { inject } from './node_modules/@vercel/analytics/dist/index.mjs';

// Inject the analytics script with automatic mode detection
inject({
  mode: 'auto', // Automatically detect environment
  debug: false  // Disable debug logging in production
});
