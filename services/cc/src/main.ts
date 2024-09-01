// import { Transport } from '@nestjs/microservices';
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { middleware } from './app.middleware';
import { AppModule } from './app.module';

async function bootstrap(): Promise<string> {
  const isProduction = process.env.NODE_ENV === 'production';
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  if (isProduction) {
    app.enable('trust proxy');
  }

  // Express Middleware
  middleware(app);

  app.enableShutdownHooks();
  app.enableCors();
  await app.listen(process.env.PORT || 3001);

  return app.getUrl();
}

void (async (): Promise<void> => {
  try {
    const url = await bootstrap();
    NestLogger.log(url, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();

// async function bootstrap() {
//   const port = process.env.PORT ? Number(process.env.PORT) : 8080;
//   const app = await NestFactory.createMicroservice(AppModule, {
//     transport: Transport.TCP,
//     options: {
//       host: '0.0.0.0',
//       port,
//     },
//   });
//   await app.listen();
//   console.log('Microservice listening on port:', port);
// }
// bootstrap();
