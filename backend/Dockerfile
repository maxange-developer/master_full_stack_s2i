# ---- Stage 1: Build ----
FROM node:18-alpine AS builder

# Build tools needed for sqlite3 native compilation on Alpine
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src/ ./src/

RUN npm run build

# ---- Stage 2: Production ----
FROM node:18-alpine AS production

WORKDIR /app

# Copy pre-compiled node_modules from builder (includes sqlite3 native binaries)
# Avoids re-compiling sqlite3 in production stage (no build tools needed)
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Copy compiled TypeScript output
COPY --from=builder /app/dist ./dist

# Create data directory for SQLite (ephemeral on Render free tier)
RUN mkdir -p /app/data /app/public/images/blog

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget -qO- http://localhost:8000/health || exit 1

CMD ["node", "dist/index.js"]
