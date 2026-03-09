# ---- Stage 1: Build ----
# node:18 (Debian/bookworm) includes build-essential (make, gcc, g++) via buildpack-deps
# Only python3 needs to be added — required by node-gyp to compile sqlite3
FROM node:18 AS builder

RUN apt-get update && apt-get install -y --no-install-recommends python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src/ ./src/

RUN npm run build

# ---- Stage 2: Production ----
# node:18-slim is smaller; node_modules are copied pre-compiled from builder
# so no build tools are needed here
FROM node:18-slim AS production

WORKDIR /app

# Copy pre-compiled node_modules (includes sqlite3 native binaries)
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Copy compiled TypeScript output
COPY --from=builder /app/dist ./dist

# Create SQLite data directory (ephemeral on Render free tier — auto-seed handles repopulation)
RUN mkdir -p /app/data /app/public/images/blog

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget -qO- http://localhost:8000/health || exit 1

CMD ["node", "dist/index.js"]
