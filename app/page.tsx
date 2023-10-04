import { Button } from '@/components/ui/button'
import Image from 'next/image'

const state = true;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
      Hello discord Clone
      </p>
      <Button>
        Click Me
      </Button>
    </div>
  )
}

