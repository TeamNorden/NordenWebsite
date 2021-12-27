import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User extends Document {
  @Prop()
  id: string

  @Prop()
  username: string

  @Prop()
  locale: string

  @Prop()
  mfa_enabled: boolean

  @Prop()
  flags: number

  @Prop()
  banner: string | null

  @Prop()
  accent_color: number | null

  @Prop()
  avatar: string | null

  @Prop()
  discriminator: string

  @Prop()
  verified: boolean

  @Prop()
  fetchedAt: string
}

export const UserSchema = SchemaFactory.createForClass(User)
