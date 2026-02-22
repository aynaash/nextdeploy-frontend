# ---------- STAGE 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# ---------- STAGE 2: Runtime ----------
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN adduser -D nextjs && chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

CMD ["node", "server.js"]
