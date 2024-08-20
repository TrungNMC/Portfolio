'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from './ui/button';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';

const links = [
  {
    name: 'home',
    path: '/',
  },
  // {
  //   name: 'services',
  //   path: '/services',
  // },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  // {
  //   name: 'contact',
  //   path: '/contact',
  // },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
          <CiMenuFries className='text-[32px] text-accent'></CiMenuFries>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
          {/* logo */}
          <div className='mt-32 mb-40 text-center text-2xl'>
            <h1 className='text-4xl font-semibold'>
              Portfolio<span className='text-accent'>.</span>
            </h1>
          </div>
          {/* nav */}
          <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link, index) => {
              return (
                <Link href={link.path} key={index}>
                  <SheetClose
                    className={`${
                      link.path === pathname &&
                      'text-accent border-b-2 border-accent'
                    } text-xl capitalize hover:text-accent transition-all`}
                  >
                    {link.name}
                  </SheetClose>
                </Link>
              );
            })}
            <Link href='/contact'>
              <SheetClose>
                <Button>Hire me</Button>
              </SheetClose>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
