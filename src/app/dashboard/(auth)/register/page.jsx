'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [err, setErr] = useState(null)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            res.status === 201 && router.push("/dashboard/login?success=Account has been created")
        } catch (err) {
            setErr(err)
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* we could use nextjs-actions here, but they are not stable yet. */}
                <input
                    type='text'
                    placeholder='username'
                    required
                    className={styles.input}
                />
                <input
                    type='email'
                    placeholder='email'
                    required
                    className={styles.input}
                />
                <input
                    type='password'
                    placeholder='password'
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Register</button>
            </form>
            {err && "Oops! Something went wrong!"}
            <Link href="/dashboard/login">Login with an existing account</Link>
        </div>
    );
};

export default Register;