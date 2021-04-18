import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Endpoints from '../api/endpoints'
import { validateEmail } from '../../utils'
import Head from 'next/head'

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid },
    } = useForm()

    const onSubmit = (data, e) => console.log(data, e)
    const onError = (errors, e) => console.log(errors, e)

    return (
        <>
            <Head>
                <title>Instagram login</title>
            </Head>
            <div className="container flex mx-auto max-w-screen-md items-center h-screen">
                <div className="flex flex-col w-2/5 mx-auto">
                    <div className="flex flex-col items-center bg-white p-5 border mb-4 rounded-md shadow-md">
                        <h1 className="flex justify-center w-full mb-2">
                            <Image
                                src="/images/instagram-logo.png"
                                alt="Instagram"
                                className="mt-2 w-6/12 mb-4"
                                height={50}
                                width={200}
                            />
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        invalidEmail: validateEmail,
                                    },
                                })}
                                aria-label="Enter your email address"
                                className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                                type="text"
                                placeholder="Email address"
                            />
                            <input
                                {...register('password', {
                                    required: true,
                                    minLength: 8,
                                    validate: {
                                        minLength: length => Number(length) < 8,
                                    },
                                })}
                                aria-label="Enter your password"
                                className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                                type="password"
                                placeholder="Password"
                            />
                            <button
                                disabled={isDirty || !isValid}
                                type="submit"
                                className="bg-blue-500 text-white w-full rounded h-8 font-bold"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded-md shadow-md">
                        <p className="text-sm">
                            Don't have an account?{' '}
                            <span className="text-blue-500">
                                <Link href={Endpoints.signup}>Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
