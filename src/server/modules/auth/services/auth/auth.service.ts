import { Injectable } from '@nestjs/common'
import { AuthenticationProvider } from '~server/modules/auth/services/auth/auth'
import { UserDetails } from '~server/types/types'
import { User } from '~server/modules/user/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class AuthService implements AuthenticationProvider {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(user: UserDetails): Promise<User> {
    console.log('Creating...')
    return new this.userModel(user).save()
  }

  async findUser(snowflake: string): Promise<User> {
    return this.userModel.findOne({ id: snowflake })
  }

  async validateUser(details: UserDetails): Promise<User> {
    const user = await this.userModel.findOne({ id: details.id })
    if (user) {
      await this.userModel.updateOne({ id: details.id }, details)
      return user
    }
    return this.createUser(details)
  }
}
