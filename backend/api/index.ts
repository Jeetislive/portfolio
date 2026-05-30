import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import express from 'express';
import { AppModule } from '../src/app.module';

const server = express();

let cachedApp: express.Express | null = null;

async function createApp(): Promise<express.Express> {
  if (cachedApp) return cachedApp;

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.setGlobalPrefix('api');

  const corsOrigins: (string | RegExp)[] = [
    'http://localhost:3000',
    /\.vercel\.app$/,
  ];
  if (process.env.CORS_ORIGIN) {
    corsOrigins.push(process.env.CORS_ORIGIN);
  }
  app.enableCors({
    origin: corsOrigins,
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
  cachedApp = server;
  return cachedApp;
}

export default async (req: any, res: any) => {
  const app = await createApp();
  app(req, res);
};
