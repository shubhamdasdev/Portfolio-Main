'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container px-6">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
            Get in Touch
          </h1>
          <p className="max-w-[600px] text-lg text-neutral-400">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Card className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:sdas31@hawk.iit.edu"
                    className="text-lg text-neutral-400 hover:text-white"
                  >
                    sdas31@hawk.iit.edu
                  </a>
                </div>
              </div>
            </Card>

            <Card className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Location
                  </h3>
                  <p className="text-lg text-neutral-400">
                    Chicago, IL
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+13126475921"
                    className="text-lg text-neutral-400 hover:text-white"
                  >
                    +1 (312) 647-5921
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <Card className="border-white/10 bg-black p-8 transition-colors hover:border-white/20">
            <div className="mb-6 flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-white" />
              <h2 className="text-2xl font-semibold text-white">
                Send a Message
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  required
                  className="min-h-[150px] border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                />
              </div>
              <Button
                type="submit"
                className="h-12 w-full rounded-full bg-white px-6 text-black hover:bg-white/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}