import React from 'react';

import styles from './styles.module.scss';

const Intro: React.FC = () => {
  return(
      <section className={styles.container}>
        <h2>Designed for the future</h2>
        <div className={styles.content}>
          <div className={styles.texts}>
            <div>
              <h3>Introducing an extensible editor</h3>
              <p>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
              </p>
            </div>
            <div>
              <h3>Robust content management</h3>
              <p>
                Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
              </p>
            </div>
          </div>
          <img src="/illustration-editor-desktop.svg" alt="editor" className={styles.imgDesktop}/>
          <img src="/illustration-editor-mobile.svg" alt="editor" className={styles.imgMobile}/>
        </div>
      </section>
  )
}

export default Intro;
