'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { contentMarketingData, ContentMarketingData } from './contentMarketingData';

interface CardProps {
  i: number;
  title: string;
  description: string;
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  image,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          background: 'black',
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top border-2 border-white`}
      >
        <h2 className='text-2xl text-center font-semibold text-white font-helvetica-neue'>
          {title.split(' ').map((word, index, array) => (
            <span key={index}>
              {index === array.length - 1 ? (
                <span className="line-through">{word}</span>
              ) : (
                <>
                  {word}
                  {index < array.length - 1 && ' '}
                </>
              )}
            </span>
          ))}
        </h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className='text-sm text-white/90 leading-relaxed'>{description}</p>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden border-2 border-white`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img 
                src={image} 
                alt={title} 
                className='absolute inset-0 w-full h-full object-cover'
                onError={(e) => {
                  // Fallback to a default image if the main image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = '/logo.png';
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ContentMarketingCards = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <section className='text-white w-full bg-black'>
          {contentMarketingData.map((item, i) => {
            const targetScale = 1 - (contentMarketingData.length - i) * 0.05;
            return (
              <Card
                key={`cm_${i}`}
                i={i}
                image={item.image}
                title={item.title}
                color={item.color}
                description={item.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
});

ContentMarketingCards.displayName = 'ContentMarketingCards';

export default ContentMarketingCards;
