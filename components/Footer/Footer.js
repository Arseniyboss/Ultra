import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubtext,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Styles";

const Footer = () => {
  const [email, setEmail] = useState("");

  const { theme } = useThemeContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <FooterContainer theme={theme} id="footer">
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubtext>You can unsubscribe at any time</FooterSubtext>
        <Form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            theme={theme}
          />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/" theme={theme}>
              Testimonials
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Careers
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Investors
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Terms of Service
            </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/" theme={theme}>
              Contact
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Support
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Destinations
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Sponsorships
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/" theme={theme}>
              Submit Video
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Ambassadors
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Agency
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Influencer
            </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/" theme={theme}>
              Instagram
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Facebook
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Youtube
            </FooterLink>
            <FooterLink to="/" theme={theme}>
              Twitter
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            theme={theme}
          >
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Linkedin"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
