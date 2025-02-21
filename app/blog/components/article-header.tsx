"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import Image from "next/image";

interface ArticleHeaderProps {
  author: {
    name: string;
    image: string;
  };
  date: string;
  readTime: string;
}

export function ArticleHeader({ author, date, readTime }: ArticleHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={author.image} 
                  alt={author.name}
                  style={{ objectPosition: '90% 10%' }}
                />
                <AvatarFallback 
                  className="bg-primary/5 text-primary font-medium"
                >
                  {author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] w-[500px] p-0 overflow-hidden rounded-lg border-none">
            <div className="relative w-full aspect-square">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
                style={{ 
                  objectPosition: '90% 10%',
                  objectFit: 'cover'
                }}
                sizes="(max-width: 500px) 90vw, 500px"
                priority
                quality={100}
              />
            </div>
          </DialogContent>
        </Dialog>
        <span>{author.name}</span>
      </div>

      <span className="hidden sm:inline">•</span>

      <div className="flex items-center gap-2">
        <time>{new Date(date).toLocaleDateString('fr-FR')}</time>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
} 