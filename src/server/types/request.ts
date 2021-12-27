import { Request } from 'express'
import { User } from '~server/modules/user/user.schema'

export type AuthenticatedRequest = Request & {
  logOut: () => void
  user: User
}
