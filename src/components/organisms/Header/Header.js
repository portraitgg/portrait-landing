import PropTypes from 'prop-types'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCheck } from 'react-icons/md'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'

import { Circle } from '@/components/atoms/Circle'
import { Input, Textarea } from '@/components/atoms/Form'
import { Logo } from '@/components/atoms/Logo'
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner'

import styles from './Header.module.css'

const validationSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  reason: yup.string().required('Please provide a reason for joining the waitlist')
})

function Modal({ data, isOpen, isSuccess, isLoading, onClose, onSubmit }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: data,
    resolver: yupResolver(validationSchema)
  })

  useEffect(() => {
    reset(data)
  }, [reset, data])

  function handleFormSubmit(_data, e) {
    e.preventDefault()
    onSubmit(_data)
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10000 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-lg p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 shadow-xl rounded-2xl">
              {isSuccess ? (
                <h3 className="text-lg sm:text-2xl sm:leading-relaxed font-bold text-white text-center">
                  You have successfully signed up for our waitlist!
                </h3>
              ) : (
                <>
                  <Dialog.Title as="h3" className="text-lg sm:text-2xl font-bold text-white mb-10">
                    Get early access to Portrait
                  </Dialog.Title>

                  <form className="flex flex-col gap-y-8" onSubmit={handleSubmit(handleFormSubmit)}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Input
                          label="1. What's your name?"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          hasError={!!errors.name?.message}
                          errorText={errors.name?.message}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Input
                          label="2. Where can we reach you?"
                          id="email"
                          name="email"
                          placeholder="Your email address"
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          hasError={!!errors.email?.message}
                          errorText={errors.email?.message}
                        />
                      )}
                    />
                    <Controller
                      name="reason"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Textarea
                          label="3. Tell us why you're interested in Portrait"
                          id="reason"
                          name="reason"
                          placeholder="Who you are, what you do, why you'd like to test out Portrait."
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          hasError={!!errors.reason?.message}
                          errorText={errors.reason?.message}
                        />
                      )}
                    />
                    <button
                      type="submit"
                      className={`relative inline-flex items-center justify-center px-8 py-4 bg-yellow-200 hover:bg-yellow-300 rounded-lg ${
                        isLoading ? 'cursor-not-allowed' : ''
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="inline-flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
                          <LoadingSpinner size="20" />
                        </span>
                      ) : null}
                      <p className={`text-lg font-medium ${isLoading ? 'invisible' : ''}`}>
                        Join closed beta waitlist
                      </p>
                    </button>
                  </form>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

Modal.propTypes = {
  data: PropTypes.shape({}),
  isOpen: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
}

Modal.defaultProps = {
  data: {},
  isOpen: false,
  isSuccess: false,
  isLoading: false,
  onClose: () => {},
  onSubmit: () => {}
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleLandingSubmit(e) {
    e.preventDefault()

    setIsOpen(true)
  }

  async function handleWaitlistSubmit(data) {
    setIsLoading(true)

    const apiUrl = 'https://api.portrait.gg/api/v1/waitlist'

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    setIsLoading(false)

    if (response.ok) {
      setIsSuccess(true)
    }
  }

  return (
    <>
      <div className={`relative ${styles.header}`}>
        <div className="flex items-center justify-between h-20 container mx-auto px-6 text-white">
          <Link href="/">
            <a className="h-6">
              <Logo />
            </a>
          </Link>
          <div className="flex">
            <a
              className="flex items-center text-white font-medium gap-2"
              href="https://twitter.com/portrait_gg"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter fill="#ffffff" size={20} />
              <span>
                Follow us <span className="hidden sm:inline">on Twitter</span>
              </span>
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-32 sm:pb-40 md:pb-48 lg:pb-60 text-center">
          <h1 className={`text-7xl font-extrabold leading-tighter tracking-tight ${styles.title}`}>
            Turn blockchain addresses into beautiful websites.
          </h1>
          <form
            className="flex flex-col sm:items-center gap-y-4 mt-12"
            onSubmit={handleLandingSubmit}
          >
            <div
              className="
            flex flex-col gap-y-3 md:gap-y-0 items-center rounded-full bg-transparent
            sm:border sm:border-white sm:border-opacity-20
            sm:flex-row sm:bg-white sm:bg-opacity-5 sm:focus-within:border-opacity-30
            "
            >
              <input
                className="
                flex text-center px-8 py-4 text-base leading-normal text-white outline-none w-full rounded-full
                bg-white bg-opacity-5 border border-white border-opacity-20
                sm:bg-transparent sm:border-0 sm:filter-none sm:w-64 sm:text-left
                "
                type="text"
                placeholder="Enter your email address..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex justify-center w-full sm:w-auto px-8 py-4 bg-yellow-200 hover:bg-yellow-300 rounded-full"
              >
                <span className="text-base font-medium leading-normal">
                  Join closed beta waitlist
                </span>
              </button>
            </div>
            <div className="inline-flex space-x-2 justify-center items-center text-base font-medium leading-normal text-gray-500 filter mix-blend-screen">
              <MdCheck size="1.25em" />
              <p>No coding experience required</p>
            </div>
          </form>
          <Circle
            color="#2A2B38"
            size="1100px"
            blur="400px"
            className="top-0 transform -translate-x-1/2"
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        isSuccess={isSuccess}
        isLoading={isLoading}
        data={{ email }}
        onClose={() => setIsOpen(false)}
        onSubmit={(data) => handleWaitlistSubmit(data)}
      />
    </>
  )
}

Header.propTypes = {}

export { Header }
