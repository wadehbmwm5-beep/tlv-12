// Import and inject Vercel Speed Insights
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Inject the Speed Insights script with automatic mode detection
injectSpeedInsights({
  mode: 'auto', // Automatically detect environment
  debug: false  // Disable debug logging in production
});
