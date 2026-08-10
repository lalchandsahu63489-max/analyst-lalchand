import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaThreads,
  FaBookOpen,
} from "react-icons/fa6";
import Container from "../../components/ui/Container";
import SocialLinks from "../../components/ui/SocialLinks";
import Button from "../../components/ui/Button";

const Footer = () => {
  return (
    <footer className="border-border bg-background-elevated mt-15 border-t py-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Heading */}

          <span className="text-primary-light mb-3 font-mono text-sm tracking-widest uppercase">
            LET'S CONNECT
          </span>

          <h2 className="font-display text-text mb-4 text-3xl font-bold">
            Thanks for Visiting
          </h2>

          <p className="text-text-muted mb-10 max-w-2xl">
            Interested in collaborating, discussing new opportunities, or just
            saying hello? Feel free to connect with me on any platform below.
          </p>

          {/* Social Icons */}

          <SocialLinks />

          {/* Actions */}

          <div className="mb-14 flex flex-wrap justify-center gap-4">
            <a href="/Resume.docx" download="Resume.docx">
              <Button variant="ghost">Download Resume</Button>
            </a>
            <a href="#projects">
              <Button variant="outline">View Projects</Button>
            </a>
          </div>

          {/* Divider */}

          <div className="border-border mb-6 w-full border-t" />

          {/* Bottom */}

          <div className="text-text-muted flex w-full flex-col items-center justify-between gap-3 text-sm md:flex-row">
            <p>© 2026 Lalchand Sahu. All rights reserved.</p>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>

              <span>•</span>

              <a href="#" className="hover:text-accent transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
