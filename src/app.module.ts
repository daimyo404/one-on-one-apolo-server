import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [GraphqlModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
