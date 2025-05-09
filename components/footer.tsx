import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Pranshu Dargar</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating beautiful, functional web experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/pranshu-dargar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/pranshu_dargar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&to=pranshu11.p@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaRegEnvelope className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Jaipur, Rajasthan</p>
              <p>
                <Link
                  href="https://mail.google.com/mail/?view=cm&to=pranshu11.p@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  pranshu11.pd@gmail.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pranshu Dargar. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}