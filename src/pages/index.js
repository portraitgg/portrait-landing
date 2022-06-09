import { useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import { Waves } from '@/components/atoms/Waves'
import { DragAndDrop, Customization } from '@/components/atoms/Illustration'
import { Logos } from '@/components/atoms/Logos'

import { Header } from '@/components/organisms/Header'
import { Categories } from '@/components/organisms/Categories'

import categoriesData from '@/data/categories'

import styles from './index.module.css'

function TextBlock({ eyebrow, title, body, extra, isCentered, className }) {
  return (
    <div
      className={`flex flex-col space-y-6 md:space-y-10 ${className} ${
        isCentered ? 'items-center text-center' : null
      }`}
    >
      <div className={`flex flex-col space-y-4 ${isCentered ? 'items-center' : null}`}>
        {eyebrow ? (
          <p className="text-sm md:text-lg font-bold tracking-wide text-yellow-200 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight tracking-snug font-extrabold text-white">
          {title}
        </h2>
      </div>
      {body ? (
        <p className="text-lg md:text-xl leading-relaxed md:leading-relaxed text-gray-300 max-w-prose">
          {body}
        </p>
      ) : null}
      {extra || null}
    </div>
  )
}

TextBlock.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  extra: PropTypes.node,
  isCentered: PropTypes.bool,
  className: PropTypes.string
}

TextBlock.defaultProps = {
  eyebrow: null,
  body: null,
  extra: null,
  isCentered: false,
  className: ''
}

export default function Home() {
  const router = useRouter()
  const { invite, qr } = router.query

  useEffect(() => {
    if (invite === 'consensus2022') {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? styles['animate-enter'] : styles['animate-leave']
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transform`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5 text-xl">👋</div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">Consensus 2022 is here!</p>
                  <p className="mt-0.5 text-sm text-gray-500">
                    You have received an invite to join the Portrait beta!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                type="button"
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ),
        {
          duration: 20000
        }
      )
    }

    if (qr !== undefined) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? styles['animate-enter'] : styles['animate-leave']
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transform`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5 text-xl">👋</div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">You scanned our QR code..</p>
                  <p className="mt-0.5 text-sm text-gray-500">
                    ..and received an invite to join the Portrait beta!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                type="button"
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ),
        {
          duration: 20000
        }
      )
    }
  }, [invite, qr])

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Portrait</title>
        <meta name="description" content="Portrait" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col gap-y-32 sm:gap-y-40 md:gap-y-48 lg:gap-y-60">
        <section className="relative">
          <div className="relative container mx-auto px-6 z-10">
            <div className="grid grid-cols-12 gap-6">
              <TextBlock
                title="Portrait stands for creativity and ownership."
                body="Portrait is a decentralized drag-and-drop web page builder with cryptographic
                proofs. It is the first open source solution that bridges the gap between
                blockchain domains and distributed file systems and protocols. Portrait web pages
                contain tamper-proof signatures of ownership and edit history."
                className="col-span-12 md:col-span-9"
              />
            </div>
          </div>
          <Waves className="top-1/2 transform -translate-y-1/2 w-full pointer-events-none" />
          <div
            style={{
              position: 'absolute',
              width: '867px',
              height: '867px',
              right: '0',
              top: '0',
              background: '#202B30',
              borderRadius: '50%',
              filter: 'blur(300px)',
              zIndex: '-1'
            }}
          />
        </section>

        <section className="relative">
          <div className="relative container mx-auto px-6 z-10 mb-12">
            <TextBlock eyebrow="True control" title="Portrait is for everyone" isCentered />
          </div>

          <div className="flex flex-col gap-y-4 md:gap-y-6">
            <Categories items={categoriesData} />
            <Categories items={categoriesData} scrollDirection="right" />
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12 gap-6">
              <TextBlock
                eyebrow="Safe, open and reliable"
                title="Decentralized and censorship resistant"
                body="Portrait is built on top of open-source protocols such as IPFS and Filecoin, to
                facilitate long-term storage for your web pages. Decentralized and censorship
                resistant by design."
                className="col-span-12 md:col-span-8 md:col-start-5"
                extra={
                  <div className="flex gap-x-6 items-center">
                    <Link href="https://filecoin.io/">
                      <a className="h-6" target="_blank">
                        <Logos name="filecoin" width="64px" />
                      </a>
                    </Link>
                    <Link href="https://ipfs.io/">
                      <a className="h-6" target="_blank">
                        <Logos name="ipfs" width="64px" />
                      </a>
                    </Link>
                  </div>
                }
              />
            </div>
          </div>
          <Waves className="top-0 transform -scale-x-100 w-full pointer-events-none" />
        </section>

        <section className="relative">
          <div className="relative container mx-auto px-6 z-10">
            <div className="grid grid-cols-12 gap-6 items-center">
              <TextBlock
                eyebrow="The easiest way to build your web presence"
                title="Click — Drag — Drop"
                body="Our powerful online website builder makes it super easy to build your site. No
                coding required. Choose from a vast selection of beautifully designed components,
                to get up and running in just minutes!"
                className="col-span-12 md:col-span-7"
              />
              <div className="col-span-12 md:col-span-4 md:col-end-13 mt-6 md:mt-auto">
                <DragAndDrop />
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="relative container mx-auto px-6 z-10">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 row-start-2 md:row-start-auto md:col-span-4 mt-6 md:mt-auto">
                <Customization />
              </div>
              <TextBlock
                eyebrow="Show your creativity"
                title="Design it your way"
                body="With a wide range of customization options, you can design your website the way you want. Whether you are an artist selling NFTs, looking for a colourful layout, or a journalist publishing censorship-resistant articles looking for fonts with the highest readability, we’ve got you covered."
                className="col-span-12 row-start-1 md:row-start-auto md:col-span-7 md:col-start-6"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12 mt-20 sm:mt-28 md:mt-36 lg:mt-48">
        <div className="relative container mx-auto px-6">
          <p className="text-base font-medium leading-normal text-gray-500">&copy; Portrait</p>
        </div>
      </footer>
    </div>
  )
}
