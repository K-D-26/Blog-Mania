import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=''
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Digital Storytellers
          </h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil quis ut repellat porro molestiae. Amet, rem eos cumque, ut exercitationem temporibus dolorum quasi sit recusandae vel, neque praesentium accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam voluptatem minus quisquam. Officiis unde asperiores repellat, nisi impedit quisquam inventore. Nulla porro nam nostrum est tempora dolores quos sequi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem et officiis, illo distinctio ea labore laboriosam repellat impedit, enim ab ipsam illum. Sunt id mollitia tempore cupiditate rem similique!
            <br />
            <br />
            - Creative Illustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  )
}

export default About
