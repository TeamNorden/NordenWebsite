import { Profile, Strategy } from 'passport-discord'
import { PassportStrategy } from '@nestjs/passport'
import { Inject, Injectable } from '@nestjs/common'
import { AuthenticationProvider } from '~server/modules/auth/services/auth/auth'

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthenticationProvider) {
    super({
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: process.env.OAUTH_CALLBACKURL,
      scope: ['identify', 'guilds'],
    })
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    return await this.authService.validateUser({
      id: profile.id,
      username: profile.username,
      accent_color: profile.accent_color,
      avatar: profile.avatar,
      banner: profile.banner,
      discriminator: profile.discriminator,
      fetchedAt: profile.fetchedAt,
      flags: profile.flags,
      locale: profile.locale,
      mfa_enabled: profile.mfa_enabled,
      verified: profile.verified,
    })
  }
}
