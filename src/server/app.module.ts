import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

import { ViewModule } from '~server/modules/view/view.module'
import { AuthModule } from '~server/modules/auth/auth.module'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '~server/modules/user/user.module'

let envFilePath = '.env.development'
console.log(`Server running in: ${process.env.ENVIORMENT}`)
if (process.env.ENVIORMENT === 'PRODUCTION') envFilePath = '.env.production'
if (process.env.ENVIORMENT === 'TESTING') envFilePath = '.env.testing'
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    AuthModule,
    PassportModule.register({ session: true }),
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
