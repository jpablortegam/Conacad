'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 min-h-screen w-full p-4 md:p-8 items-center justify-center',
        className
      )}
      {...props}
    >
      <div className="flex overflow-hidden max-w-4xl mx-auto w-full shadow-lg rounded-lg">
        <div className="grid w-full p-0 md:grid-cols-2">
          {/* Panel de formulario - Adaptado para funcionar con variables CSS */}
          <form
            className="p-6 md:p-8 h-full bg-card text-card-foreground"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-sm text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline font-medium hover:text-accent-foreground transition-colors inline-block py-1 px-2 -mx-2"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Login
              </Button>

              <div className="relative text-center text-sm text-muted-foreground after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-input">
                <span className="relative z-10 px-2 bg-card">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  onClick={() => window.location.href = '/auth/apple'}
                  variant="outline"
                  className="w-full border-input hover:bg-accent hover:text-accent-foreground"
                >
                  {/* SVG Apple */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
                <Button
                  type="button"
                  onClick={() => window.location.href = '/auth/google'}
                  variant="outline"
                  className="w-full border-input hover:bg-accent hover:text-accent-foreground"
                >
                  {/* SVG Google */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>

              <div className="text-center text-sm">
                Dont have an account?{' '}
                <a 
                  href="/signup" 
                  className="underline font-medium hover:text-accent-foreground transition-colors inline-block py-1 px-2 -mx-2"
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>

          <div className="relative hidden md:block h-full bg-secondary">
            <div className="relative h-full w-full">
              <Image
                src="/image.png"
                alt="Imagen decorativa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs max-w-4xl mx-auto w-full text-muted-foreground">
        By clicking continue, you agree to our{' '}
        <a href="/terms" className="underline font-medium hover:text-accent-foreground transition-colors inline-block py-1 px-2 -mx-2">Terms of Service</a> and{' '}
        <a href="/privacy" className="underline font-medium hover:text-accent-foreground transition-colors inline-block py-1 px-2 -mx-2">Privacy Policy</a>.
      </div>
    </div>
  );
}