import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import imge1 from './image/Screenshot 2024-06-03 121304.png';

const socialLinks = [
  { href: '#', srText: 'Facebook', icon: <FaFacebook /> },
  { href: '#', srText: 'Instagram', icon: <FaInstagram /> },
  { href: '#', srText: 'Twitter', icon: <BsTwitter /> },
  { href: '#', srText: 'GitHub', icon: <BsGithub /> },
];

const footerSections = [
  {
    title: 'Company',
    links: ['About', 'Meet the Team', 'History', 'Careers'],
  },
  {
    title: 'Services',
    links: ['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'],
  },
  {
    title: 'Helpful Links',
    links: ['Contact', 'FAQs', 'Live Chat'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions', 'Returns Policy', 'Accessibility'],
  },
];

function SocialLink({ href, srText, icon }) {
  return (
    <a className="hover:opacity-75" href={href} target="_blank" rel="noreferrer">
      <span className="sr-only">{srText}</span>
      {icon}
    </a>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-100">
        {links.map((linkText, index) => (
          <a key={index} className="hover:opacity-75" href="#">
            {linkText}
          </a>
        ))}
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-11 bg-gradient-to-r bg-blue-800 backdrop-blur-md shadow-md border border-spacing-1 shadow-t w-full">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={imge1} className="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-100">
              Kankariya Tower, Front of Arihant Ayati, Pal Link Rd, Dev Nagar, Jodhpur, Rajasthan 342001
            </p>
            <div className="flex mt-8 space-x-6 text-gray-100">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 text-white">
            {footerSections.map((section, index) => (
              <FooterSection key={index} {...section} />
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-100">© 2022 Company Name</p>
      </div>
    </footer>
  );
}
export default Footer;
