import { PassportSerializer } from '@nestjs/passport'
import { Inject, Injectable } from '@nestjs/common'
import { User } from '~server/modules/user/user.schema'
import { AuthenticationProvider } from '~server/modules/auth/services/auth/auth'

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthenticationProvider) {
    super()
  }

  serializeUser(user: User, done: (err: Error, user: User) => void): any {
    done(null, user)
  }

  async deserializeUser(user: User, done: (err: Error, user: User) => void): Promise<any> {
    const userDB = await this.authService.findUser(user.id)
    done(null, userDB ?? null)
  }
}
