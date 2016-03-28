import React from 'react';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';
import ProjectGrid from '../components/ProjectGrid';
import siteData from '../data.js';

function HomePage() {
  return (
    <div className="page-wrap">

      <PageHeader
        logoImage={siteData.logo}
        alt={siteData.name}
      />

    <PageSection title="Our Work">
      <ProjectGrid projects={siteData.projects} />
    </PageSection>

      <section className="page-section" id="work">
        <div className="page-section__inner">
          <h2 className="section-heading" >Our Work</h2>

          <ul className="project-grid">
            <li className="block block-1-2 color-purple">
              <a href="http://rxartisans.com" target="_blank">RxArtisans</a>
            </li>
            <li className="block block-1-2 last color-purple-dark">
              <a href="http://progstar.org" target="_blank">ProgStar</a>
            </li>
            <li className="block block-2-3 color-black">
              <a href="http://mcadsustainabledesign.com" target="_blank">MCAD Sustainable Design Blog</a>
            </li>
            <li className="block block-1-3 last color-purple-light">
              <a href="http://knittingcounter.com" target="_blank">Knitting Counter</a>
            </li>
          </ul>
          </div>
      </section>

      <section className="page-section section-team" id="team">
        <h2 className="section-heading">Our Team</h2>

        <div className="bio-list">
          <div className="bio">
            <img src={siteData.jamesImage} alt="James Johnson" />
            <div className="bio__titlecard">
              <h3 className="bio__name">James Johnson</h3>
              <p className="bio__title">Lead Developer</p>
              <p className="bio__status code">
                lineOfCode.forEach(drinkLatte)
              </p>
              <p><a href="http://james.mn" target="_blank">james.mn</a></p>
            </div>
          </div>

          <div className="bio">
            <img src={siteData.emilyImage} alt="Emily Ward" />
            <div className="bio__titlecard">
              <h3 className="bio__name">Emily Ward</h3>
              <p className="bio__title">Lead Designer</p>
              <p className="bio__status">
                Sipping Serifs and Espresso
              </p>
              <p><a href="http://emilyward.net" target="_blank">emilyward.net</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-hireus" id="hire-us">
        <div className="page-section__inner">
          <h2 className="section-heading">Hire Us</h2>
          <p>
            We love working with small to medium-sized businesses and non-profits.
          </p>

          <form
            action="https://formspree.io/hello@deptofcreativecaffeination.com"
            method="POST"
          >
            <input name="name" type="text" placeholder="Your Name" />
            <input name="_replyto" type="email" placeholder="you@yourcompany.com" />
            <textarea
              name="message"
              placeholder="Tell us a bit about your project and goals."
            >
            </textarea>
            <input
              type="hidden"
              name="_next"
              value="//deptofcreativecaffeination.com/thanks.html"
            />
            <input
              type="hidden"
              name="_subject"
              value="HIRE US! The Dept of Creative Caffeination"
            />
            <input type="text" name="_gotcha" />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer className="page-section section-footer">
        <div className="page-section__inner">
          <ul className="social-media">
            <li><a href="#!"><i className="fa fa-github"></i></a></li>
            <li><a href="#!"><i className="fa fa-envelope"></i></a></li>
            <li><a href="#!"><i className="fa fa-twitter"></i></a></li>
          </ul>
          <p>&copy; The Department of Creative Caffeination</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
