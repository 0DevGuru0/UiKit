import {
  Facebook,
  FacebookFill,
  Instagram,
  InstagramFill,
  Linkedin,
  LinkedinFill,
  Twitter,
  TwitterFill,
} from '@avidkit/icons';

import { FooterConfig } from '../Footer';

export const footerConfig: FooterConfig = {
  poweredBy: 'Powered by Lernito',
  academy: 'Lernito Academy',
  copyRightLink: 'https://notionwave.ca/',
  textLinks: [
    {
      href: '/faq',
      label: 'FAQ',
    },
    { href: '/help', label: 'Help Center' },
    { href: 'https://notionwave.ca/privacy-policy-2/', label: 'Privacy' },
    {
      label: 'Terms',
      onClick: (e: any, number = 2) => {
        e.preventDefault();
        alert(`Terms of Service-tabNumber: ${number}`);
      },
    },
  ],
  iconLinks: [
    {
      label: 'Facebook',
      onClick: (e) => {
        e.preventDefault();
        alert('Facebook-icon');
      },
      icon: {
        default: <Facebook />,
        hover: <FacebookFill />,
      },
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/notionwave?lang=en',
      icon: {
        default: <Twitter />,
        hover: <TwitterFill />,
      },
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/notionwave',
      icon: {
        default: <Instagram />,
        hover: <InstagramFill />,
      },
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/notionwave/',
      icon: {
        default: <Linkedin />,
        hover: <LinkedinFill />,
      },
    },
  ],
};
