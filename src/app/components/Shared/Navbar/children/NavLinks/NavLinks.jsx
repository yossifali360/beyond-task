import Link from 'next/link'
import React, { Fragment } from 'react'
import NavLink from '../NavLink/NavLink'

export default function NavLinks({ links }) {
    return (
        <Fragment>
            {
                links.map((link, idx) => <NavLink key={idx} route={link.route} className='dark:text-white'>{link.name}</NavLink>)
            }
        </Fragment>
    )
}