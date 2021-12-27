import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'
import { AuthenticatedGuard, DiscordAuthGuard } from '~server/modules/auth/guards'
import { AuthenticatedRequest } from '~server/types/request'

@Controller('api/auth')
export class AuthController {
  /**
   * /api/auth/login
   */
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  /**
   * /api/auth/redirect
   */
  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000/')
  }

  /**
   * /api/auth/status
   */
  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: AuthenticatedRequest) {
    return req.user
  }

  /**
   * /api/auth/logout
   */

  @Get('logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: AuthenticatedRequest) {
    req.logOut()
  }
}
