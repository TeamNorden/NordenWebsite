import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User } from '~server/modules/user/user.schema'
import { CreateUseDto } from '~server/modules/user/user.dto'
import { UserDetails } from '~server/types/types'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async fetchOrCreate(createUserDto: CreateUseDto): Promise<User> {
    console.log('Fetching...')
    let user: User
    user = await this.userModel.findOne({ id: createUserDto.id })
    console.log(user)
    if (user == null) user = await this.createUser(user)
    console.log(user)
    return user
  }

  async findUserById(id: string): Promise<User> {
    console.log('Finding...')
    return this.userModel.findOne({ id })
  }

  async createUser(user: UserDetails): Promise<User> {
    console.log('Creating...')
    return await new this.userModel(user).save()
  }
}
