export type User = {
  id: Snowflake
  username: string
  locale: string
  mfa_enabled: boolean
  flags: number
  banner: string | null
  accent_color: number | null
  avatar: string | null
  discriminator: string
  verified: boolean
  fetchedAt: string
}

export type Snowflake = `${bigint}`
