'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogImage
} from '@/components/ui/morphing-dialog'
import { ScrollArea } from '@/components/ui/scroll-area';
import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave';

import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  BLOG_POSTS,
} from './data'
import { TextScramble } from '@/components/motion-primitives/text-scramble';
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}


const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectPhotoProps = {
  src: string
}


function ProjectPhoto({ src }: ProjectPhotoProps) {
  return (
    <MorphingDialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <MorphingDialogTrigger>
        <MorphingDialogImage
          src={src}
          alt='Project thumbnail'
          className='aspect-video w-full rounded-[4px] object-cover'
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className='relative'>
          <MorphingDialogImage
            src={src}
            alt='Sony Style Store in the Sony Center complex - Berlin, Germany (2000)'
            className='h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]'
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className='h-5 w-5 text-zinc-500' />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 pr-4 pb-4">
          <p className="text-zinc-600 dark:text-zinc-400">
            computer science student at fordham university with experience as a software and data engineer intern. 
          </p>
        </div>
        <div className="flex-1 space-y-4 pt-4">
            <TextShimmerWave className='font-mono text-sm' duration={1}>
              currently creating and exploring the world...
            </TextShimmerWave>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-xl bg-zinc-50/40 p-0 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectPhoto src={project.photo} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">work experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              //href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section className="space-y-3">
        <h3 className="text-lg font-medium">books i like</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          got into reading recently, here are some that I've enjoyed
        </p>

        <MorphingDialog
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 24,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: '4px',
            }}
            className='border border-gray-200/60 bg-white'
          >
            <div className='flex items-center space-x-3 p-3'>
              <MorphingDialogImage
                src='/assets/lonesomeDove.jpg'
                alt='lonesome dove'
                className='h-8 w-8 object-cover object-top'
                style={{
                  borderRadius: '4px',
                }}
              />
              <div className='flex flex-col items-start justify-center space-y-0'>
                <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs'>
                  Lonesome Dove
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
                  Larry McMurtry
                </MorphingDialogSubtitle>
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: '12px',
              }}
              className='relative h-auto w-[500px] border border-gray-100 bg-white'
            >
              <ScrollArea className='h-[90vh]' type='scroll'>
                <div className='relative p-6'>
                  <div className='flex justify-center py-10'>
                    <MorphingDialogImage
                      src='/assets/lonesomeDove.jpg'
                      alt='What I Talk About When I Talk About Running - book cover'
                      className='h-auto w-[200px]'
                    />
                  </div>
                  <div className=''>
                    <MorphingDialogTitle className='text-black'>
                      Lonesome Dove
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle className='font-light text-gray-400'>
                      Larry McMurtry
                    </MorphingDialogSubtitle>
                    <div className='mt-4 text-sm text-gray-700'>
                      <p>
                         Who knew that a story about a cattle drive from south Texas to Montana could be so amazing?
                         Please just read this book you need to it is a must. The characters are all so perfect I have never
                         read or seen anything that has such well-developed and great characters. They all feel so true, consistent and
                         unique. 
                      </p>
                      <p>
                        McMurtry's writing is also so clear, conversational and beautiful. He really nails the relationships between characters perfectly.
                      </p>
                      <p>
                        Just read it okay it's such a great journey :)
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <MorphingDialogClose className='text-zinc-500' />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
        
        <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className='border border-gray-200/60 bg-white'
      >
        <div className='flex items-center space-x-3 p-3'>
          <MorphingDialogImage
            src='/assets/tinmg.webp'
            alt='Things in Nature Merely Grow'
            className='h-8 w-8 object-cover object-top'
            style={{
              borderRadius: '4px',
            }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs'>
              Things in Nature Merely Grow
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
              Yiyun Li
            </MorphingDialogSubtitle>
          </div>
        </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className='relative h-auto w-[500px] border border-gray-100 bg-white'
        >
          <ScrollArea className='h-[90vh]' type='scroll'>
            <div className='relative p-6'>
              <div className='flex justify-center py-10'>
                <MorphingDialogImage
                  src='/assets/tinmg.webp'
                  alt='What I Talk About When I Talk About Running - book cover'
                  className='h-auto w-[200px]'
                />
              </div>
              <div className=''>
                <MorphingDialogTitle className='text-black'>
                  Things in Nature Merely Grow
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-400'>
                  Yiyun Li
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700'>
                  <p>
                    "There is no good way to say this..." that's also how I feel about this book. 
                  </p>
                  <p>
                    It is a memoir/reflection about the grief the "abyss" that Yiyun Li has to live with after
                    the suicide of both of her sons. She writes about it so honestly and beautifully. Yes it is
                    depressing, but there is something refreshing about someone just acknowledging when a situation
                    just straight up sucks, and not forcing there to be a silver lining.
                  </p>
                  <p>
                    I do think though that it is unfortunate that depression isn't explicitly mentioned. It's a shame honestly
                    and I also don't agree with her values completely but that's okay.
                  </p>
                  <p>
                    I don't have to agree with her for me to love the book. It's one of my favorites since it helped me feel that pain,
                    that kind of helplessness that depression makes someone feel. When the sufferring in life outweighs the reason to live then what?
                    It is a mentality unlike the one that I have but it helped me feel that sadness and in turn better empathize with people who are in that
                    frame of mind. Well at least I tried.
                  </p>
                </div>
              </div>
            </div>
           </ScrollArea>
          <MorphingDialogClose className='text-zinc-500' />
         </MorphingDialogContent>
        </MorphingDialogContainer>
       </MorphingDialog>
      
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">some thoughts</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> 

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">more of me</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
