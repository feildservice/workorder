import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import * as controllers from './controllers';
import * as providers from './providers';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';

@Module({
  imports: [
    LoggerModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      // context: ({ req }) => ({ request: req }),
    }),
  ],
  controllers: [controllers.CustomerController],
  providers: [
    providers.OrganizationResolver,
    providers.OrganizationCrudService,
    providers.AgentTerritoryCrudService,
    providers.AgentTerritoryResolver,
    providers.ServiceTerritoryCrudService,
    providers.ServiceTerritoryResolver,
    providers.CustomerService,
    providers.PrismaService,
    providers.CustomerResolver,
    providers.CustomerCrudService,
    providers.ContactResolver,
    providers.ContactCrudService,
  ],
})
export class AppModule {}
