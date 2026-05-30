import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  // Validate required env vars
  if (process.env.CONTACT_EMAIL_TO && !process.env.SMTP_HOST) {
    logger.warn('CONTACT_EMAIL_TO is set but SMTP_HOST is missing — email sending will be disabled');
  }

  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // CORS — allow Nuxt frontend
  const corsOrigins: (string | RegExp)[] = [
    'http://localhost:3000',
    'https://*.vercel.app',
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

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);
  logger.log(`Jeet Portfolio API running on port ${port}`);
}

bootstrap();
