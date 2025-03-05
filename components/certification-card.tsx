"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import { Award } from "lucide-react";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  date: string;
  organization: string;
  imagePath: string;
  skills: string[];
}

export function CertificationCard({ title, date, organization, imagePath, skills }: CertificationCardProps) {
  const pdfPath = imagePath.replace('.png', '.pdf');

  return (
    <div className="relative pl-8 border-l-2 border-violet-500/30">
      <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
      <Dialog>
        <DialogTrigger asChild>
          <div className="group cursor-pointer bg-card hover:bg-card/80 dark:hover:bg-white/5 rounded-xl p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-violet-500/10 border border-border/50 dark:border-white/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-lg bg-violet-500/10 dark:bg-violet-500/5 group-hover:bg-violet-500/20 dark:group-hover:bg-violet-500/10 transition-colors">
                <Award className="h-5 w-5 text-violet-500 dark:text-violet-400" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground group-hover:text-foreground/80 transition-colors">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {organization} • {date}
                </p>
              </div>
            </div>
            
            <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-muted dark:bg-white/5">
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-contain p-2 transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-muted text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0">
          <div className="relative w-full h-full flex flex-col">
            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold mb-1 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {organization} • {date}
              </p>
            </div>

            <div className="relative flex-1 min-h-[50vh] bg-black/5">
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-contain"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 