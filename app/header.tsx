'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import Link from 'next/link'
import { useState } from 'react';

export function Header() {
  const [isTrigger, setIsTrigger] = useState(false);
  
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <TextScramble
            className = 'text-sm'
            as='span'
            speed={0.01}
            trigger={isTrigger}
            onHoverStart={() => setIsTrigger(true)}
            onScrambleComplete={() => setIsTrigger(false)}
          >
            Steven Uy
          </TextScramble>
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          student and software engineer
        </TextEffect>
      </div>
    </header>
  )
}
