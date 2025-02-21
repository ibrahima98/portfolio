"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import Image from "next/image";

interface ClickableAvatarProps {
  author: {
    name: string;
    image: string;
  };
}

export function ClickableAvatar({ author }: ClickableAvatarProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
          <Avatar className="h-8 w-8">
            <AvatarImage 
              src={author.image} 
              alt={author.name}
              style={{ objectPosition: '90% 10%' }}
            />
            <AvatarFallback>
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
  );
} 