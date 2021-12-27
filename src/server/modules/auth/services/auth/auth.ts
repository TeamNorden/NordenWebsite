import { UserDetails } from '~server/types/types'
import { User } from '~server/modules/user/user.schema'

export interface AuthenticationProvider {
  validateUser(details: UserDetails): Promise<User>
  createUser(user: UserDetails): Promise<User>
  findUser(user: string): Promise<User>
}
