import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const cors = require("cors");

async function bootstrap() {
  //cors
var corsOptions = {
  origin: "http://localhost:4200"
};

  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  await app.listen(3000);
}
bootstrap();
