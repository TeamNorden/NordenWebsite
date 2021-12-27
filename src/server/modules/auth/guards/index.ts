import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
  async canActivate(context: ExecutionContext): Promise<any> {
    const activate = (await super.canActivate(context)) as boolean
    const request = context.switchToHttp().getRequest()
    await super.logIn(request)
    return activate
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    return req.isAuthenticated()
  }
}
