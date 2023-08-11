'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './page.module.css';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// export const metadata = {
//   title: 'Blog-Mania Contact Information',
//   description: 'This is Contact Page',
// };

const Contact = () => {

  // Toast
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }

  // EmailJS
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        result => {
          toast.success('Your message has been sent!', toastOptions);
          e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='contact'
            fill={true}
            className={styles.image}
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type='text'
            name='user_name'
            className={styles.input}
            placeholder='name'
            required
          />
          <input
            type='email'
            name='user_email'
            className={styles.input}
            placeholder='email'
            required
          />
          <textarea
            name='message'
            className={styles.textArea}
            placeholder='message'
            cols='30'
            rows='10'
            required
          ></textarea>
          <button className={styles.button} type="submit">
            Send
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
