import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
]

const articles = [
  {
    id: 1,
    title: 'the WET Codbase',
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `Come waste your time with me`,
  },
  {
    id: 2,
    title: 'goodby, clean code',
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Let clean code guide you. Then let it go.`,
  },
  {
    id: 3,
    title: 'my decade in review',
    date: new Date(2018, 7, 11),
    length: 5,
    snippet: `A personal reflection.`,
  },
  {
    id: 4,
    title: 'what are the react team principles',
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `UI Before API.`,
  },
]

export default articles