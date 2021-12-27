import { Module } from '@nestjs/common'
import { AuthController } from './controllers/auth/auth.controller'
import { DiscordStrategy } from '~server/modules/auth/strategies'
import { AuthService } from './services/auth/auth.service'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '~server/modules/user/user.schema'
import { SessionSerializer } from '~server/modules/auth/utils/Serializer'

@Module({
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
})
export class AuthModule {}
