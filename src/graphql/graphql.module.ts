import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path/posix';
import { plugins } from 'pretty-format';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => ({
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        playground: false,
        typePaths: ['./src/**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'src/graphql/type/graphql.ts'),
          outputAs: 'class',
        },
      }),
    }),
  ],
})
export class GraphqlModule {}
