import { LocalDate } from '@js-joda/core'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const localDate = LocalDate.now();
  return (
    <div>{localDate.toString()}</div>

  )
}
