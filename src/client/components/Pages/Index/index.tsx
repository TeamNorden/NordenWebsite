import { Code, Container, Divider, Text, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import useStyles from './index.styles'
import { User } from '~client/types/global'
import { RiAlertFill, RiShieldFill, RiMessageFill, RiQuestionnaireFill } from 'react-icons/ri'

export default function IndexContent({ user }: { user?: User | undefined }) {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  return (
    <>
      <section className="smart-scroll">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="index.html">
              Norden
            </a>
            <button
              className="navbar-toggler navbar-toggler-right border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span data-feather="grid" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#features">
                    Bots
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#dev">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <section className="py-7 py-md-0 bg-hero" id="home">
        <div className="container">
          <div className="row vh-md-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
              <h1 className="heading-black text-capitalize">Norden</h1>
              <p className="lead py-3">Norden is a team of skilled developers making bots to best your experience and enhance your server on Discord.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-7" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">Norden offers bots you need, and then some.</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row feature-boxes">
                <div className="col-md-6 box">
                  <div className="icon-box box-primary">
                    <div className="icon-box-inner">
                      <RiShieldFill />
                    </div>
                  </div>
                  <h5>SWAT</h5>
                  <p className="text-muted">
                    Sit back, relax. Let SWAT handle the bad actors. With our trained algorithms, you can be sure that your server will be safe and secure.
                  </p>
                  <br />
                  <a target="_blank" href="invite_SWAT.html" className="btn btn-primary">
                    Invite SWAT now
                  </a>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box box-success">
                    <div className="icon-box-inner">
                      <RiMessageFill />
                    </div>
                  </div>
                  <h5>FBot</h5>
                  <p className="text-muted">
                    The most annoying bot on Discord. Have insightful conversations with FBot, edit your friends' profile pictures and share the spiciest memes
                    with FBot
                  </p>
                  <a target="_blank" href="invite_FBot.html" className="btn btn-primary">
                    Invite FBot now
                  </a>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box box-danger">
                    <div className="icon-box-inner">
                      <RiAlertFill />
                    </div>
                  </div>
                  <h5>Goot</h5>
                  <p className="text-muted">
                    Meet Goot, the most customizable bot on Discord! Custom commands, custom setups, even a custom bot! Goot has it all.
                  </p>
                  <a target="_blank" href="invite_Goot.html" className="btn btn-primary">
                    Invite Goot now
                  </a>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box box-info">
                    <div className="icon-box-inner">
                      <RiQuestionnaireFill />
                    </div>
                  </div>
                  <h5>???</h5>
                  <p className="text-muted">
                    This space could be you! Let us know in our{' '}
                    <a target="_blank" href="server.html">
                      Discord server
                    </a>{' '}
                    why you should be a part of TeamNorden
                  </p>
                  <a target="_blank" href="server.html" className="btn btn-primary">
                    Talk to us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2>Frequently asked questions</h2>
              <p className="text-muted lead">Answers to some of the most common questions we get.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h6>Can I try some of your bots for free?</h6>
                  <p className="text-muted">
                    Absolutely! We encourage everyone to give the free versions of all our bots a shot! If you like it or find it benefits your server(s),
                    please consider purchasing a premium plan for that respective plan, or buy premium in all our bots with a bundle. [Coming soon!]
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How can I join TeamNorden?</h6>
                  <p className="text-muted">
                    We sometimes open applications for develeopers for our bots, more often than not however, you can become a member of the team by
                    contributing to our projects.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>Ok, so how can I contribute?</h6>
                  <p className="text-muted">
                    You can contribute to our projects on <a href="https://github.com/TeamNorden">GitHub</a>
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How often do you release updates?</h6>
                  <p className="text-muted">
                    We don't have a set release schedule, we deploy hotfixes as we need to. However you can join the official{' '}
                    <a target="_blank" href="server.html">
                      support server
                    </a>{' '}
                    to stay updated on each update!
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>What is your refund policy?</h6>
                  <p className="text-muted">
                    We don't offer refunds, any purchase made is final and any chargebacks will result in a permanent ban from our services.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How can I contact you?</h6>
                  <p className="text-muted">
                    You can come hang out with us in Norden's{' '}
                    <a target="_blank" href="server.html">
                      support server
                    </a>{' '}
                    if you need support, have questions, just wanna talk or even learn how to make your own Discord bots!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h5 className="mb-4">Have any more questions?</h5>
              <a target="_blank" href="server.html" className="btn btn-primary">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 bg-dark section-angle top-left bottom-left" id="dev">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">Team Member Links</h2>
              <p className="text-muted lead">Keep up to date with the developers on TeamNorden!</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card">
                <a target="_blank" href="https://github.com/Codeize" rel="noreferrer">
                  <img className="card-img-top img-raised" src="img/codeizeChristmas.png" alt="Codeize PFP" />
                </a>
                <div className="card-body">
                  <a target="_blank" href="https://github.com/Codeize" className="card-title mb-2" rel="noreferrer">
                    <h5>Codeize</h5>
                  </a>
                  <p className="text-muted small-xl mb-2">Co-founder</p>
                  <p className="card-text">See Codeize's GitHub profile by clicking on the link below.</p>
                  <a target="_blank" href="https://github.com/Codeize" rel="noreferrer">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <style></style>
                <a target="_blank" href="https://github.com/FadTheChad" rel="noreferrer">
                  <img className="card-img-top img-raised" src="img/fad.png" alt="Fad PFP" />
                </a>
                <div className="card-body">
                  <a target="_blank" href="https://github.com/FadTheChad" className="card-title mb-2" rel="noreferrer">
                    <h5>FadTheChad</h5>
                  </a>
                  <p className="text-muted small-xl mb-2">Co-founder</p>
                  <p className="card-text">See FadTheChad's GitHub profile by clicking on the link below.</p>
                  <a target="_blank" href="https://github.com/FadTheChad" rel="noreferrer">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <a href="https://github.com/Scalgoon">
                  <img className="card-img-top img-raised" src="img/goose.png" alt="Tony PFP" />
                </a>
                <div className="card-body">
                  <a target="_blank" href="https://github.com/Scalgoon" className="card-title mb-2" rel="noreferrer">
                    <h5>Goose</h5>
                  </a>
                  <p className="text-muted small-xl mb-2">Co-founder</p>
                  <p className="card-text">See Goose's GitHub profile by clicking on the link below.</p>
                  <a target="_blank" href="https://github.com/Scalgoon" rel="noreferrer">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-md-6 mx-auto text-center">
              <a target="_blank" className="btn btn-primary d-inline-flex flex-row align-items-center" href="server.html">
                Join the server!
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mr-auto">
              <h5>About Norden</h5>
              <p className="text-muted">
                The concept for Norden was made by Codeize when he realized that helping bots grow is near impossible, and having the manpower to maintain a
                high quality bot is also near impossible, thankfully Norden aims to change that for the better.
              </p>
            </div>
            <div className="col-sm-2">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <a target="_blank" href="tos.html">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Partner</h5>
              <ul className="list-unstyled">
                <li>Stay tuned ;)</li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li>
                  <a target="_blank" href="server.html">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-muted text-center small-xl">&copy; 2021 Hyphen by Codeize and TeamNorden - All Rights Reserved</div>
          </div>
        </div>
      </footer>

      <div className="scroll-top">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </div>
    </>
  )
}
