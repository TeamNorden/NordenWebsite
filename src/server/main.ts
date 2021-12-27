import { NestFactory } from '@nestjs/core'
import * as session from 'express-session'
import * as passport from 'passport'
import 'colors'
import { AppModule } from './app.module'
import { computeHash } from '~server/utils/utils'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoStore = require('connect-mongo')

;(async function () {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env.PORT || '3000'
  app.use(
    session({
      secret: computeHash(process.env.COOKIE_SECRET || "we'vebeenreachingyouregardingyourcarsextendedwarranty"),
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, touchAfter: 24 * 3600 }),
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(PORT, () => console.log(`${'NEST'.blue} ${'|'.gray} ${`Running on port: ${PORT.green}`.white}`.bgBlack))
})()
