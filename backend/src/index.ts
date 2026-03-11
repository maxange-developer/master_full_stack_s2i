/**
 * Express Application Entry Point
 *
 * Initializes Express app with:
 * - CORS middleware
 * - Body parsers
 * - API routes
 * - Error handling
 * - Database connection
 *
 * CRITICAL: Must listen on port 8000 to match frontend API calls
 */

import express from "express";
import cors from "cors";
import { settings } from "./core/config";
import { initDatabase } from "./core/database";
import { errorHandler } from "./middlewares/errorHandler";
import apiRouter from "./api/api";
import { seedIfEmpty } from "./utils/seedIfEmpty";

const app = express();

/**
 * CORS Configuration
 * Must allow frontend origin (http://localhost:5173 for dev, Render URL for prod)
 * Dynamic origin handler ensures compatibility even if CORS_ORIGINS env var fails
 */
app.use(
  cors({
    origin: (origin, callback) => {
      // Log the incoming origin for debugging
      console.log(`🔍 CORS Request from origin: ${origin || "no-origin"}`);

      // Allow requests with no origin (like mobile apps, Postman, or server-to-server)
      if (!origin) {
        return callback(null, true);
      }

      // Check if origin is in allowed list
      const allowedOrigins = [
        ...settings.CORS_ORIGINS,
        "https://master-start2impact.onrender.com",
        "http://localhost:5173",
        "http://localhost:3000",
      ];

      if (allowedOrigins.includes(origin)) {
        console.log(`✅ CORS: Allowing origin ${origin}`);
        callback(null, true);
      } else {
        console.log(`❌ CORS: Rejecting origin ${origin}`);
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

/**
 * Explicit preflight handling for all routes
 * Ensures OPTIONS requests are handled even if CORS middleware misses them
 */
app.options("*", cors());

/**
 * Body parsers
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Root endpoint
 */
app.get("/", (req, res) => {
  res.json({
    message: "Tenerife AI Activity Finder API",
    version: "1.0.0",
    status: "running",
    api_endpoint: `${settings.API_V1_STR}`,
  });
});

/**
 * Health check endpoint
 */
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

/**
 * CORS debug endpoint - helps diagnose CORS issues
 */
app.get("/cors-test", (req, res) => {
  res.json({
    message: "CORS is working!",
    corsOrigins: settings.CORS_ORIGINS,
    requestOrigin: req.headers.origin || "no-origin",
    timestamp: new Date().toISOString(),
  });
});

/**
 * API Routes (CRITICAL: Must use /api/v1 prefix)
 */
app.use(`${settings.API_V1_STR}`, apiRouter);

/**
 * Error handling middleware (must be last)
 */
app.use(errorHandler);

/**
 * Start server
 */
async function startServer() {
  try {
    // Initialize database (creates tables if they don't exist)
    await initDatabase();

    // Seed with initial data if DB is empty (handles Render ephemeral FS)
    await seedIfEmpty();

    // Start listening
    app.listen(settings.PORT, () => {
      const host =
        process.env.RENDER_EXTERNAL_URL || `http://localhost:${settings.PORT}`;
      console.log("🚀 ========================================");
      console.log(`✅ Server running on ${host}`);
      console.log(`✅ API endpoint: ${host}${settings.API_V1_STR}`);
      console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`✅ CORS Origins: ${settings.CORS_ORIGINS.join(", ")}`);
      console.log("🚀 ========================================");
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

// Start server if not in test mode
if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default app; // Export for testing
