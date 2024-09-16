import { socials } from '@/components/footer/Footer'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-4xl'>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to main</span>
        </Link>
        <h1 className='title mb-12'>Let&apos;s Connect!</h1>
        <p>
          I’d love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out. You can
          connect with me through:
        </p>
        <div className='mt-4 space-y-2'>
          {socials.map(item => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
              className='flex items-center gap-2 text-muted-foreground hover:text-foreground'
            >
              <item.icon aria-hidden='true' className='h-5 w-5' />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactPage
