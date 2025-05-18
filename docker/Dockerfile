FROM node:20 AS base

# Set environment variables
ENV NODE_ENV=${NODE_ENV} \
    PORT=3001 \
    APP_HOME=/app \
    NEXT_TELEMETRY_DISABLED=1

WORKDIR ${APP_HOME}

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci
COPY . .

# Development
FROM base AS development
EXPOSE ${PORT}
CMD ["npm", "run", "dev:docker"]
