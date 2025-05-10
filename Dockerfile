FROM node:22.3-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@8.15.5 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

# ✅ Prisma Client 생성
RUN npx prisma generate

# ✅ Next.js 빌드
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
