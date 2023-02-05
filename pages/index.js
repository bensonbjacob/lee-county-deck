import Head from 'next/head';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import mainImg from '../public/images/main.jpg';
import poolImg from '../public/images/pool.jpg';
import ownerImg from '../public/images/owner.jpg';
import porchImg from '../public/images/porch.jpg';
import footerImg from '../public/images/footer.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lee County Deck and Fence</title>
        <meta
          name='description'
          content='Website for Lee County Deck and Fence'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <main>
        <div className='min-h-screen bg-gray-100 text-gray-800'>
          <div className='p-6 space-y-8'>
            <header className='container flex items-center justify-between h-16 px-4 mx-auto rounded bg-gray-50'>
              <div className='items-center hidden space-x-8 lg:flex'>
                <div className='space-x-4'>
                  <SocialIcon url='https://instagram.com' />
                  <SocialIcon url='https://facebook.com' />
                </div>
              </div>
              <div className='items-center hidden space-x-8 lg:flex'>
                <div className='space-x-4'>
                  <a rel='noopener noreferrer' href='#about'>
                    About
                  </a>
                  <a rel='noopener noreferrer' href='#services'>
                    Services
                  </a>
                  <a rel='noopener noreferrer' href='#'>
                    Our Work
                  </a>
                </div>
                <button className='px-4 py-2 rounded-md bg-emerald-600 text-gray-50'>
                  Contact
                </button>
              </div>
              <button className='flex items-center justify-center p-2 lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6 text-gray-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </button>
            </header>
            <main>
              <div className='container mx-auto space-y-16'>
                <section className='grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5'>
                  <div className='w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-gray-50'>
                    <span className='block mb-2 text-emerald-600'>
                      Lee County Fence and Deck
                    </span>
                    <h1 className='text-5xl font-extrabold text-gray-900'>
                      Transform your outdoor space.
                    </h1>
                    <p className='my-8'>
                      Contact us today for a free consultation and
                      estimate. Let&#39;s create something beautiful
                      together.
                    </p>
                    <form
                      noValidate=''
                      action=''
                      className='self-stretch space-y-3 ng-untouched ng-pristine ng-valid'
                    >
                      <div>
                        <label
                          htmlFor='name'
                          className='text-sm sr-only'
                        >
                          Your name
                        </label>
                        <input
                          id='name'
                          type='text'
                          placeholder='Your name'
                          className='w-full rounded-md focus:ring focus:ring-emerald-600 border-gray-300'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='lastname'
                          className='text-sm sr-only'
                        >
                          Email address
                        </label>
                        <input
                          id='lastname'
                          type='text'
                          placeholder='Email address'
                          className='w-full rounded-md focus:ring focus:ring-emerald-600 border-gray-300'
                        />
                      </div>
                      <button className='w-full py-2 font-semibold rounded bg-emerald-600 text-gray-50'>
                        Reach Out
                      </button>
                    </form>
                  </div>
                  <Image
                    src={mainImg}
                    alt='hero image'
                    className='object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500'
                  />
                </section>
                <section id='services'>
                  <span className='block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center text-emerald-600'>
                    What We Do
                  </span>
                  <h2 className='text-5xl font-bold lg:text-center text-gray-900'>
                    Our Services Include
                  </h2>
                  <div className='grid gap-6 my-16 lg:grid-cols-3'>
                    <div className='flex flex-col p-8 space-y-4 rounded-md bg-gray-50'>
                      <p className='text-2xl font-semibold'>
                        <b>Build</b>
                        <br />
                        <br />
                        Bring your outdoor space to life with a new
                        deck or fence from Lee County Deck and Fence.
                        Our skilled craftsmen will work with you every
                        step of the way to create the perfect outdoor
                        living space for your needs and preferences.
                        From concept to completion, we guarantee
                        exceptional workmanship and customer
                        satisfaction.
                      </p>
                    </div>
                    <div className='flex flex-col p-8 space-y-4 rounded-md bg-gray-50'>
                      <p className='text-2xl font-semibold'>
                        <b>Repair</b>
                        <br />
                        <br />
                        Keep your deck and fence in top condition with
                        expert repair services. Whether you&#39;re
                        dealing with worn out boards, loose railings,
                        or other damages, our team of skilled
                        craftsmen will restore your outdoor living
                        space to its former glory.
                      </p>
                    </div>
                    <div className='flex flex-col p-8 space-y-4 rounded-md bg-gray-50'>
                      <p className='text-2xl font-semibold'>
                        <b>Custom Design</b>
                        <br />
                        <br /> Create a truly unique outdoor space
                        with custom deck and fence design services
                        from Lee County Deck and Fence. Our team of
                        experts will work with you to create a custom
                        design that not only meets your needs and
                        preferences, but also enhances the look and
                        feel of your property. From start to finish,
                        we guarantee exceptional workmanship and
                        customer satisfaction.
                      </p>
                    </div>
                  </div>
                </section>
                <section
                  id='about'
                  className='grid gap-6 lg:grid-cols-2'
                >
                  <Image
                    src={poolImg}
                    alt='pool image'
                    className='object-cover w-full rounded-md max-h-96 bg-gray-500'
                  />
                  <div className='flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50'>
                    <Image
                      src={ownerImg}
                      alt='Matthew Carpenter image'
                      className='object-cover w-20 h-20 rounded-full bg-gray-500'
                    />
                    <blockquote className='max-w-lg text-lg italic font-medium text-center'>
                      At Lee County Deck and Fence, we believe that
                      your outdoor space should be an extension of
                      your home, a place for relaxation, entertainment
                      and memories. That&#39;s why we are committed to
                      delivering top-quality deck and fence building
                      services that exceed your expectations. Let us
                      help you transform your outdoor space into your
                      own personal oasis.
                    </blockquote>
                    <div className='text-center text-gray-600'>
                      <p>Matthew Carpenter</p>
                      <p>Owner of Lee County Deck and Fence</p>
                    </div>
                    <div className='flex space-x-2'>
                      <button
                        type='button'
                        aria-label='Page 1'
                        className='w-2 h-2 rounded-full bg-gray-900'
                      ></button>
                      <button
                        type='button'
                        aria-label='Page 2'
                        className='w-2 h-2 rounded-full bg-gray-400'
                      ></button>
                      <button
                        type='button'
                        aria-label='Page 3'
                        className='w-2 h-2 rounded-full bg-gray-400'
                      ></button>
                      <button
                        type='button'
                        aria-label='Page 4'
                        className='w-2 h-2 rounded-full bg-gray-400'
                      ></button>
                    </div>
                  </div>
                  <div className='p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50'>
                    <h2 className='text-5xl font-bold text-gray-900'>
                      About Us
                    </h2>
                    <p className='text-gray-600'>
                      Lee County Deck and Fence is your trusted source
                      for top-quality deck and fence construction
                      services. Founded with the goal of delivering
                      exceptional workmanship and customer
                      satisfaction, our team of skilled craftsmen have
                      years of experience in the industry and are
                      dedicated to bringing your vision for the
                      perfect outdoor living space to life.
                    </p>
                    <p className='text-gray-600'>
                      We understand that your outdoor space is an
                      extension of your home and a place for
                      relaxation, entertainment, and memories.
                      That&#39;s why we use only the finest materials
                      and state-of-the-art equipment to ensure the
                      durability and longevity of your new deck or
                      fence. From start to finish, we&#39;ll work with
                      you every step of the way to make sure
                      you&#39;re completely satisfied with the end
                      result.
                    </p>
                    <p className='text-gray-600'>
                      Whether you&#39;re looking to build a new deck,
                      replace an old fence, or revamp your outdoor
                      living space, we have the expertise and
                      knowledge to make it happen. Our services
                      include deck construction, fence installation,
                      deck and fence repair, custom deck and fence
                      design, and deck and fence staining and sealing.
                    </p>
                    <p className='text-gray-600'>
                      At Lee County Deck and Fence, we believe that
                      your outdoor space should be a place for making
                      memories. Let us help you transform your outdoor
                      space into your own personal oasis. Contact us
                      today for a free consultation and estimate.
                    </p>
                  </div>
                </section>
                <section>
                  <div className='grid gap-6 lg:grid-cols-3'>
                    <div className='overflow-hidden rounded lg:flex lg:col-span-3'>
                      <Image
                        src={porchImg}
                        alt='Front porch image'
                        className='object-cover w-full h-auto max-h-96 bg-gray-500'
                      />
                      <div className='p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-50'>
                        <span className='self-start px-3 py-1 text-sm rounded-full bg-emerald-600 text-gray-50'>
                          Business
                        </span>
                        <h2 className='text-3xl font-bold md:flex-1'>
                          Curating a workplace that inspires team
                          movement
                        </h2>
                        <div>
                          <p className='text-gray-600'>
                            November 30, 2020
                          </p>
                          <p className='text-gray-600'>
                            By Leroy Jenkins
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='p-6 rounded lg:p-8 lg:py-12 bg-gray-50'>
                      <h3 className='inline font-medium text-gray-900'>
                        Panel-based blocks.
                      </h3>
                      <p className='inline'>
                        Flexible panels that are perfect for building
                        functional layouts.
                      </p>
                    </div>
                    <div className='p-6 rounded lg:p-8 lg:py-12 bg-gray-50'>
                      <h3 className='inline font-medium text-gray-900'>
                        Responsive design.
                      </h3>
                      <p className='inline'>
                        Panels look great no matter the device.
                      </p>
                    </div>
                    <div className='p-6 rounded lg:p-8 lg:py-12 bg-gray-50'>
                      <h3 className='inline font-medium text-gray-900'>
                        Premium support.
                      </h3>
                      <p className='inline'>
                        Join over 50 000 satisfied customers who use
                        our templates.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className='container p-6 py-20 mx-auto rounded lg:px-8 bg-gray-50'>
                    <h2 className='text-5xl font-bold text-center'>
                      Our team is here to help you.
                    </h2>
                    <div className='flex justify-center p-4'>
                      <a rel='noopener noreferrer' href='#'>
                        Meet our crew &gt;
                      </a>
                    </div>
                    <Image
                      src={footerImg}
                      alt='Front porch image'
                      className='object-cover w-full h-auto mt-8 rounded max-h-96 bg-gray-500'
                    />
                  </div>
                </section>
              </div>
            </main>
            <footer>
              <div className='container flex justify-end p-6 mx-auto lg:p-8 bg-gray-50'>
                <div className='flex space-x-2'>
                  <SocialIcon network='email' />
                  <SocialIcon url='https://instagram.com' />
                  <SocialIcon url='https://facebook.com' />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
