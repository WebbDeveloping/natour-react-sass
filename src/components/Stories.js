import React from 'react';

export default function Stories() {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='img/video.mp4' type='video/mp4'></source>
          <source src='img/video.webm' type='video/webm'></source>
          Your Browser is not supported!
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We Make People Happy</h2>
      </div>

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              src='img/nat-8.jpg'
              alt='Person on a tour'
              className='story__img'
            />
            <figcaption className='story__caption'>John Dee</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              I had the best week ever with my family!
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              quia quod esse inventore ea doloribus, id eveniet ducimus
              voluptatem iure ipsam veniam unde et nihil non sunt ab laudantium
              quia quod esse inventore ea doloribus, id eveniet ducimus
              voluptatem iure ipsam veniam unde et nihil non sunt ab laudantium
              quam.
            </p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              src='img/nat-9.jpg'
              alt='Person on a tour'
              className='story__img'
            />
            <figcaption className='story__caption'>Mike Pages</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              What a wonderful experience!
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              quia quod esse inventore ea doloribus, id eveniet ducimus
              voluptatem iure ipsam veniam unde et nihil non sunt ab laudantium
              quia quod esse inventore ea doloribus, id eveniet ducimus
              voluptatem iure ipsam veniam unde et nihil non sunt ab laudantium
              quam.
            </p>
          </div>
        </div>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <a href='#' className='btn-text'>
          Read More Stories &rarr;
        </a>
      </div>
    </section>
  );
}
