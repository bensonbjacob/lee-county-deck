import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navBar';
import { SocialIcon } from 'react-social-icons';
import mainImg from '../public/images/main.jpg';
import poolImg from '../public/images/pool.jpg';
import ownerImg from '../public/images/owner.jpg';
import porchImg from '../public/images/porch.jpg';
import footerImg from '../public/images/footer.jpg';
import port1Img from '../public/images/portfolio1.jpg';
import port2Img from '../public/images/portfolio2.jpg';
import port3Img from '../public/images/portfolio3.jpg';

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

      <div className='min-h-screen bg-gray-100 text-gray-800'>
        <div className='p-6 space-y-8'>
          <Navbar />
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
                <span className='block mb-2 text-xs font-medium tracking-widest uppercase text-center text-emerald-600'>
                  What We Do
                </span>
                <h2 className='text-5xl font-bold text-center text-gray-900'>
                  Our Services Include
                </h2>
                <div className='grid gap-6 my-16 lg:grid-cols-3'>
                  <div className='flex flex-col p-8 space-y-4 rounded-md bg-gray-50'>
                    <h3 className='font-bold text-2xl'>Build</h3>
                    <br />
                    <p>
                      Bring your outdoor space to life with a new deck
                      or fence from Lee County Deck and Fence. Our
                      skilled craftsmen will work with you every step
                      of the way to create the perfect outdoor living
                      space for your needs and preferences. From
                      concept to completion, we guarantee exceptional
                      workmanship and customer satisfaction.
                    </p>
                  </div>
                  <div className='flex flex-col p-8 space-y-4 rounded-md bg-gray-50'>
                    <h3 className='font-bold text-2xl'>Repair</h3>
                    <br />
                    <p>
                      Keep your deck and fence in top condition with
                      expert repair services. Whether you&#39;re
                      dealing with worn out boards, loose railings, or
                      other damages, our team of skilled craftsmen
                      will restore your outdoor living space to its
                      former glory.
                    </p>
                  </div>
                  <div className='flex flex-col p-8 space-y-4 rounded-md bg-gray-50'>
                    <h3 className='font-bold text-2xl'>
                      Custom Design
                    </h3>
                    <br />
                    <p>
                      Create a truly unique outdoor space with custom
                      deck and fence design services from Lee County
                      Deck and Fence. Our team of experts will work
                      with you to create a custom design that not only
                      meets your needs and preferences, but also
                      enhances the look and feel of your property.
                      From start to finish, we guarantee exceptional
                      workmanship and customer satisfaction.
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
                    At Lee County Deck and Fence, we believe that your
                    outdoor space should be an extension of your home,
                    a place for relaxation, entertainment and
                    memories. That&#39;s why we are committed to
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
                  <h2 className='text-5xl text-center md:text-left font-bold text-gray-900'>
                    About Us
                  </h2>
                  <p className='text-gray-600'>
                    Lee County Deck and Fence is your trusted source
                    for top-quality deck and fence construction
                    services. Founded with the goal of delivering
                    exceptional workmanship and customer satisfaction,
                    our team of skilled craftsmen have years of
                    experience in the industry and are dedicated to
                    bringing your vision for the perfect outdoor
                    living space to life.
                  </p>
                  <p className='text-gray-600'>
                    We understand that your outdoor space is an
                    extension of your home and a place for relaxation,
                    entertainment, and memories. That&#39;s why we use
                    only the finest materials and state-of-the-art
                    equipment to ensure the durability and longevity
                    of your new deck or fence. From start to finish,
                    we&#39;ll work with you every step of the way to
                    make sure you&#39;re completely satisfied with the
                    end result.
                  </p>
                  <p className='text-gray-600'>
                    Whether you&#39;re looking to build a new deck,
                    replace an old fence, or revamp your outdoor
                    living space, we have the expertise and knowledge
                    to make it happen. Our services include deck
                    construction, fence installation, deck and fence
                    repair, custom deck and fence design, and deck and
                    fence staining and sealing.
                  </p>
                  <p className='text-gray-600'>
                    At Lee County Deck and Fence, we believe that your
                    outdoor space should be a place for making
                    memories. Let us help you transform your outdoor
                    space into your own personal oasis. Contact us
                    today for a free consultation and estimate.
                  </p>
                </div>
              </section>
              <section id='ourwork'>
                <div className='grid gap-6 lg:grid-cols-3'>
                  <div className='overflow-hidden rounded lg:flex lg:col-span-3'>
                    <Image
                      src={porchImg}
                      alt='Front porch image'
                      className='object-cover w-full h-auto max-h-96 bg-gray-500'
                    />
                    <div className='p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-50'>
                      <span className='self-start px-3 py-1 text-sm rounded-full bg-emerald-600 text-gray-50'>
                        Our Work
                      </span>
                      <p className='md:flex-1'>
                        We take pride in the work we do and are proud
                        to showcase our past projects. Our team of
                        skilled craftsmen have years of experience in
                        deck and fence construction and have completed
                        a wide range of projects, each one tailored to
                        meet the individual needs and preferences of
                        our clients.
                      </p>
                      <p className='md:flex-1'>
                        Take a look at our portfolio and see for
                        yourself why Lee County Deck and Fence is your
                        trusted source for top-quality deck and fence
                        construction services. From custom deck
                        designs to fence installations, we&#39;ve
                        transformed outdoor spaces into beautiful and
                        functional living areas. Our attention to
                        detail and commitment to excellence is evident
                        in every project we complete.
                      </p>
                    </div>
                  </div>
                  <div className='p-6 rounded lg:p-8 lg:py-12 bg-gray-50'>
                    <Image
                      src={port1Img}
                      alt='Deck image'
                      className='object-cover w-full rounded-md max-h-96 bg-gray-500'
                    />
                  </div>
                  <div className='p-6 rounded lg:p-8 lg:py-12 bg-gray-50'>
                    <Image
                      src={port2Img}
                      alt='Deck image'
                      className='object-cover w-full rounded-md max-h-96 bg-gray-500'
                    />
                  </div>
                  <div className='p-6 rounded lg:p-8 lg:py-12 bg-gray-50'>
                    <Image
                      src={port3Img}
                      alt='Deck image'
                      className='object-cover w-full rounded-md max-h-96 bg-gray-500'
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className='container p-6 py-20 mx-auto rounded lg:px-8 bg-gray-50'>
                  <h2 className='text-5xl font-bold text-center'>
                    Our team is here to help you.
                  </h2>
                  <div className='flex justify-center p-4'>
                    Call Us Today.
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
            <div className='h-16 container flex justify-end p-6 mx-auto lg:p-8 bg-gray-50'>
              <div className='items-center flex space-x-2'>
                <SocialIcon
                  network='email'
                  bgColor='transparent'
                  fgColor='#059669'
                />
                <SocialIcon
                  url='https://instagram.com'
                  bgColor='transparent'
                  fgColor='#059669'
                />
                <SocialIcon
                  url='https://facebook.com'
                  bgColor='transparent'
                  fgColor='#059669'
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
