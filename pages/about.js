import Head from 'next/head'
import { gsap } from 'gsap'
import { Link } from 'components/link'
import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react'

import styles from 'styles/pages/about.module.scss'

const About = ({ style }, ref) => {
  const el = useRef()

  const animateIn = useCallback(() => {
    console.log('About:animateIn', el.current)
    return gsap.timeline({
      paused: true,
      defaults: {
        duration: 1
      }
    }).timeScale(0.5).fromTo(el.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }).fromTo(el.current, {
      xPercent: 100,
    }, {
      xPercent: 0,
      duration: 1,
      ease: 'expo.inOut'
    }, 0).restart()
  })

  const animateOut = useCallback(() => {
    console.warn('About:animateOut', el.current)
    gsap.timeline({
      paused: true,
      defaults: {
        duration: 1
      }
    }).timeScale(0.5).to(el.current, {
      xPercent: -100,
      duration: 1,
      ease: 'expo.inOut'
    }).restart()
  })

  useImperativeHandle(ref, () => ({
    getBounding: () => el.current.getBoundingClientRect().height,
    animateIn,
    animateOut
  }))

  return (
    <div ref={el} style={style} className="page about">
      <Head>
        <title>Next:About @ Antinomy Studio</title>
        <meta name="description" content="" />
      </Head>

      <main className="main">
        <h1 className={styles.test}>About</h1>
        <div className="grid">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <Link href="/">
            <span>Home</span>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <Link href="/">
            <span>Home</span>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus scelerisque venenatis. Maecenas et suscipit sapien. Aliquam id viverra arcu. Nulla interdum diam massa, non pharetra ligula venenatis eget. Praesent vel lacus pellentesque, rhoncus enim at, lobortis erat. Sed pharetra arcu eget risus imperdiet, in suscipit nisl auctor. Sed gravida fringilla mauris at congue. Fusce non dui a metus facilisis facilisis. Donec vitae odio ac ligula dapibus auctor. Curabitur eu ligula sed sem consectetur facilisis et in lacus. Phasellus ac felis sit amet ligula condimentum rhoncus. In tincidunt eleifend venenatis. In feugiat tristique blandit. Sed maximus viverra felis ut rhoncus.</p>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

About.displayName = 'About'

export default forwardRef(About)
