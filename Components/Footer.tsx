import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS,SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%]
        md:flex-row'>
          <Link href="/"  className='mb-10'>
          <Image src="hilink-logo.svg" width={74} height={29} alt="logo" />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link href={link}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        <div className='flex flex-col gap-5'>
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) =>(
                <Link
                href="/"
                key={link.label}
                className='flex gap-4 md:flex-col lg:flex-row'
                >
                  <p className='whitespace-nowrap'>
                    {link.label}
                  </p>
                  <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                </Link>
              ))}
            </FooterColumn>
        </div>
        <div className='flex flex-col gap-5'>
          <FooterColumn title={SOCIALS.title}>
            <ul className='regular-14 gap-4 flex text-gray-30'>
              {SOCIALS.links.map((link) =>(
                <Link href="/" key={link} >
                  <Image src={link} alt='logo' width={24} height={24} />
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>
        </div>
      </div>
      <div className="w-full border-t bg-gray-20 py-4">
        <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
      </div>
      </footer>
  )
}

type FooterColumnProps ={
  title:string;
  children:React.ReactNode
  // key:string
}

const FooterColumn =({title,children}:FooterColumnProps) =>{
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
    )
}

export default Footer