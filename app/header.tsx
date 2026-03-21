'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <TextScramble>
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
