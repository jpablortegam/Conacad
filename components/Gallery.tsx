"use client";

import React, { memo, useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface User {
  id: number;
  imageUrl: string;
  key: string;
  isAnimating?: boolean;
  targetImageUrl?: string;
  animationTrigger?: number;
}

interface GalleryProps {
  imageUrls: string[];
}

const generateUsers = (count: number, imageUrls: string[]): User[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    imageUrl: imageUrls[i % imageUrls.length],
    key: `user-${i + 1}`,
    isAnimating: false,
    animationTrigger: 0,
  }));

const GalleryLoading = memo(() => {
  // Removed unused 'theme' variable
  const skeletonCount = 6 * 6; // 6x6 para móvil
  
  return (
    <div className="flex w-full justify-center">
      <Card className="w-full max-w-[768px] md:max-w-4xl py-8 px-3 md:px-5 rounded-xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Galería de Usuarios
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-12 grid-rows-6 gap-1 md:gap-3">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-5 w-5 md:h-10 md:w-10 rounded-md"
            />
          ))}
        </div>
      </Card>
    </div>
  );
});
GalleryLoading.displayName = 'GalleryLoading';

const UserItem = memo(
  ({ user, index }: { user: User; index: number }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const animationConfig = {
      duration: 1.2,
      ease: 'easeInOut',
      delay: Math.random() * 0.3,
    };

    return (
      <div 
        className="flex items-center justify-center p-1 md:p-2 rounded-md shadow-md bg-background border border-border h-8 w-8 md:h-16 md:w-16 transition-transform hover:scale-105 hover:z-10"
      >
        <motion.div
          key={user.animationTrigger}
          initial={{ rotateY: 0 }}
          animate={user.isAnimating ? { rotateY: 180 } : { rotateY: 0 }}
          transition={animationConfig}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1200,
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '7px',
            willChange: 'transform',
          }}
          onAnimationComplete={() => {
            if (user.isAnimating && user.targetImageUrl) {
              user.imageUrl = user.targetImageUrl;
              user.isAnimating = false;
              user.targetImageUrl = undefined;
            }
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              borderRadius: '0.375rem',
              overflow: 'hidden',
            }}
            className="bg-muted"
          >
            {!imageLoaded && <Skeleton className="w-full h-full rounded-md" />}
            <Image
              src={user.imageUrl}
              alt={`Usuario ${user.id}`}
              fill
              quality={index < 6 ? 50 : 10}
              priority={index < 6}
              sizes="(max-width: 768px) 20px, 40px"
              style={{ objectFit: 'cover', pointerEvents: 'none' }}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                user.imageUrl = '/images/IconConacad.png';
              }}
            />
          </motion.div>
          {user.isAnimating && (
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: '0.375rem',
                overflow: 'hidden',
              }}
              className="bg-muted"
            >
              <Image
                src={user.targetImageUrl!}
                alt={`Usuario ${user.id}`}
                fill
                quality={10}
                priority={false}
                sizes="(max-width: 768px) 20px, 40px"
                style={{ objectFit: 'cover', pointerEvents: 'none' }}
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }
);
UserItem.displayName = 'UserItem';

const GalleryContent: React.FC<GalleryProps> = ({ imageUrls }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Genera 12×6 = 72 usuarios para desktop y 6x6 = 36 para móvil
    const userCount = window.innerWidth < 768 ? 6 * 6 : 12 * 6;
    setUsers(generateUsers(userCount, imageUrls));
  }, [imageUrls]);

  useEffect(() => {
    const handleResize = () => {
      const userCount = window.innerWidth < 768 ? 6 * 6 : 12 * 6;
      setUsers(generateUsers(userCount, imageUrls));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageUrls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prev) => {
        const animating = prev.filter((u) => u.isAnimating).length;
        if (animating > 5) return prev;
        const next = [...prev];
        const targets = new Set<number>();
        while (targets.size < Math.min(15, next.length)) {
          const i = Math.floor(Math.random() * next.length);
          if (!next[i].isAnimating) targets.add(i);
        }
        targets.forEach((i) => {
          const cur = next[i].imageUrl;
          const others = imageUrls.filter((u) => u !== cur);
          if (others.length) {
            next[i] = {
              ...next[i],
              isAnimating: true,
              targetImageUrl: others[Math.floor(Math.random() * others.length)],
              animationTrigger: Date.now(),
            };
          }
        });
        return next;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [imageUrls]);

  return (
    <div className="flex w-full justify-center">
      <Card className="w-full max-w-6xl py-8 px-3 md:px-5 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Galería de Usuarios
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-6 md:grid-cols-12 grid-rows-6 gap-1 md:gap-3 justify-items-center items-center">
            {users.map((u, i) => (
              <UserItem key={u.key} user={u} index={i} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

const GalleryWrapper: React.FC<GalleryProps> = ({ imageUrls }) => (
  <Suspense fallback={<GalleryLoading />}>
    <GalleryContent imageUrls={imageUrls} />
  </Suspense>
);

export default memo(GalleryWrapper);