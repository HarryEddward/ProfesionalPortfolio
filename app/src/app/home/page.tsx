import Navbar from '@/components/Navbar'
import React from 'react'
import * as motion from "motion/react-client"
import InfiniteHorizontalSlider from '@/components/InfiniteHorizontalSlider'
import ComponentSlideTransition from '@/components/Transitions/Component/Slide';
import ResponsiveNavbar from '@/components/Navbar/Responsive';
//import Carousel from '@/components/Carousel'


const images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pypi/pypi-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

export default function HelloPage() {
  return (
    <motion.div
    className="h-screen overflow-hidden"
    initial={{
      scale: 0.5,
      translateY: '100%',
      borderRadius: '0rem',
    }}
    animate={{
      scale: [0.5, 0.5, 1, 1, 0.97],
      translateY: ['100%', '0%', '0%', '0%', '0%'],
      borderRadius: ['0rem', '0rem', '0rem', '0rem', '1rem']
    }}
    transition={{
      duration: 4,
    }}
    >

      <div className='w-full h-full flex lg:flex-row flex-col'>
        <ComponentSlideTransition
          directionAnimation="down"
          durationAnimation={0.6}
          delayAnimation={0}
        >
          <div className='hidden lg:block h-full text-white font-DANCING_SCRIPT_dancingscript_semibold text-center text-md pr-6 bg-transparent [writing-mode:vertical-lr] [text-orientation:mixed] border-r-2'>Adrià Martín Martorell made it in 2025.</div>
        </ComponentSlideTransition>
          
        <ResponsiveNavbar/>
        <div className="w-[350px] h-screen hidden lg:block">
          <Navbar/>
          
        </div>
        
        <div className='h-full w-full bg-gray-900 overflow-y-scroll'>
          <motion.header
          className='text-8xl text-left pl-10 font-POPPINS_poppins_black my-16 px-4 max-w-screen-lg mx-auto overflow-hidden'
          initial={{
            opacity: 0,
            translateY: -80,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 30,
            damping: 20,
            mass: 1,
          }}
          >
            <motion.div className='flex border-t-8 border-r-8 pr-1 pt-1 border-white border-dashed'>
              
              <motion.h1
                className='text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] xl:text-[6vw] text-white border-2 pl-3 border-white break-words whitespace-normal'
              >
                <motion.div
                className='flex w-[10px] h-10 mt-3 border-y-2 border-white justify-center items-center'
                initial={{
                  height: '0rem'
                }}
                animate={{
                  height: ['1rem', '4rem', '3rem', '3.5rem', '2rem', '1rem']
                }}
                transition={{
                  delay: 1.3,
                  duration: 5,
                  repeat: 1.9
                }}
                >
                  <div className="h-full w-[2px] bg-white"/>
                </motion.div>

                <motion.span
                  initial={{ backgroundPosition: '200% center' }}
                  animate={{ backgroundPosition: '-200% center' }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                  }}
                  className='pr-4 bg-gradient-to-r from-pink-600 via-yellow-300 to-blue-400 text-transparent bg-clip-text'
                >
                  Talented multifaceted
                </motion.span>
                <span className='pr-4'>young developer.</span>
                <span className="inline-block items-center">
                  
                  {/* Contenedor de perspectiva */}
                  <div className='flex'>
                    <span className="inline-flex items-center ml-2" style={{ perspective: "800px" }}>
                      {/* Emoji 1 */}
                      <motion.span
                        initial={{ rotateX: 120, rotateZ: 20, translateY: 30, translateX: -10 }}
                        animate={{ rotateX: -60 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        🗺️
                      </motion.span>
                    </span>
                    
                    {/* Emoji 2 */}
                    <motion.span
                      className="inline-block ml-2"
                      initial={{
                        translateX: -50,
                        translateY: 0
                      }}
                      animate={{
                        translateY: [0, -10, 0],
                        translateX: [-50, -55, -120, -110, -115, -50, -55, -60, -80, -50]
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 4,
                      }}
                    >
                      ✍🏻
                    </motion.span>
                  </div>
                  
                </span>
              </motion.h1>
            </motion.div>

            
          </motion.header>
          <motion.main
          className='w-full h-full flex flex-col space-y-5'
          initial={{
            translateY: '100%',
          }}
          animate={{
            translateY: '0%',
          }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 30,
            damping: 20,
            mass: 1,
          }}
          >
            <div className='flex flex-col space-y-3 w-full text-center'>
              <span className='font-DANCING_SCRIPT_dancingscript_regular text-2xl text-gray-400'>Languages & Technology&#39;s:</span>
              <InfiniteHorizontalSlider
              images={images}
              speed={20_000}
              />
            </div>
            
            <motion.section
            className='w-full py-2 flex flex-col justify-start'
            initial={{
              translateX: '100%',
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 3,
              type: "spring",
              stiffness: 30,
              damping: 20,
              mass: 1,
            }}
            whileHover={{
              translateX: '10%'
            }}
            >
              <div className='pb-3 bg-[#D2B48C]'>
                  <span className='border-r-2 border-gray-900 bg-[#D2B48C] p-4 px-6 font-POPPINS_poppins_bold'>Proyectos</span>
              </div>
              <div className='w-full h-[2px] bg-gradient-to-l from-[#bc9a6d] to-[#D2B48C]'/>
              <div className='h-60 w-full bg-gradient-to-t from-[#bc9a6d] to-[#D2B48C]'>
                
              </div>
              
            </motion.section>
            <motion.section
            className='w-full py-2 flex flex-col justify-start'
            initial={{
              translateX: '100%',
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 3,
              type: "spring",
              stiffness: 30,
              damping: 20,
              mass: 1,
            }}
            whileHover={{
              translateX: '10%'
            }}
            >
              <div className='pb-3 bg-[#D2B48C]'>
                  <span className='border-r-2 border-gray-900 bg-[#D2B48C] p-4 px-6 font-POPPINS_poppins_bold'>Proyectos</span>
              </div>
              <div className='w-full h-[2px] bg-gradient-to-l from-[#bc9a6d] to-[#D2B48C]'/>
              <div className='h-60 w-full bg-gradient-to-t from-[#bc9a6d] to-[#D2B48C]'>
                
              </div>
              
            </motion.section>
          </motion.main>
          
          
        </div>
      </div>

    </motion.div>
  )
}
