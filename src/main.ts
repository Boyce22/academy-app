import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from './interfaces/pipes/validation.pipe';

const PRODUCTION = false

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  if(!PRODUCTION) {
    app.useGlobalPipes(new ValidationPipe())
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
