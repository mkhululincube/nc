import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./footer.module.css";

function FooterItems() {
  return (
    <div className={styles.siteFooter}>
      <Container>
        <Row>
          <Col xs={6} sm={12} md={6}>
            <h6>Welcome</h6>
            <p className="textJustify">
              We welcome every person, regardless of race or language, to our
              fellowship. This is a place where each person is treated with love
              and respect—a place where God is exalted and glorified, and where
              Jesus Christ is Lord. If you do not have a church home, Hyde Park
              Seventh-day Adventist Church is the place to be.
            </p>
          </Col>

          <Col xs={6} md={3}>
            <h6>Contact Us</h6>
            <ul className="footerLinks">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  6 Webster Street
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  Hyde Park, MA
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  02136
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  (617) 361-6581
                </a>
              </li>

              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h6>Quick Links</h6>
            <ul className="footerLinks">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Sermon</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Events
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">Give</a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Privace Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container>
        <Row>
          <Col xs={12} sm={6} md={8}>
            <p className={styles.copyrightText}>Copyright &copy; 2020 </p>
            <p className={styles.copyrightText}>
              Website developed by Derek Scarlett & Rizel Bobb-Semple
            </p>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <ul className={styles.socialIcons}>
              <li>
                <a className={styles.facebook} href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterItems;
