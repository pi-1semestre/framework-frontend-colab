import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName } = company;

  return (
    <>
      <Popover>
        <div className="relative z-30 px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="relative flex min-h-12 items-center justify-between"
            aria-label="Navegação principal"
          >
            <div className="flex flex-shrink-0 items-center">
              <div className="flex items-center justify-between w-full xl:w-auto">
                <a
                  href="#"
                  className="flex items-center gap-3 border-b-0"
                  aria-label="Voltar ao início"
                >
                  <span className="sr-only">{companyName}</span>
                  <span
                    className="grid grid-cols-2 overflow-hidden border-2 border-black text-sm font-black leading-none shadow-hard"
                    aria-hidden="true"
                  >
                    <span className="bg-black px-2 py-2 text-white">C</span>
                    <span className="bg-white px-2 py-2 text-black">N</span>
                  </span>
                  <span className="hidden text-sm font-black uppercase tracking-widest sm:block">
                    Cartoon Front-end
                  </span>
                </a>
                <div className="-mr-2 flex items-center xl:hidden">
                  <Popover.Button className="bg-black p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-secondary">
                    <span className="sr-only">Abrir menu principal</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex xl:ml-10 xl:gap-7 xl:items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="cursor-pointer border-b-2 border-transparent text-sm font-bold uppercase tracking-wide transition-colors hover:border-black"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={callToAction.href}
                className="border-2 border-black bg-black px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-hard transition-transform hover:-translate-y-1"
              >
                {callToAction.text}
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right xl:hidden"
          >
            <div className="border-2 border-black bg-background shadow-hard overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-sm font-black uppercase tracking-widest">
                    {companyName}
                  </span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-black p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-secondary">
                    <span className="sr-only">Fechar menu principal</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="block cursor-pointer px-3 py-3 text-base font-bold uppercase text-gray-900 hover:bg-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <a
                href={callToAction.href}
                className="block w-full bg-black px-5 py-4 text-center font-black uppercase text-white"
              >
                {callToAction.text}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
