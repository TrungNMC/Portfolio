import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/trungnguyen1912/',
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/nguyenmaichitrung2000',
  },
  { icon: <FaGithub />, path: 'https://github.com/TrungNMC' },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank'
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
