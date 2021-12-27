import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User, UserSchema } from '~server/modules/user/user.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
})
export class UserModule {}
