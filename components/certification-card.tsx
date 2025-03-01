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
    <div className="relative pl-8 border-l-2 border-primary/30">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
      <Dialog>
        <DialogTrigger asChild>
          <div className="group cursor-pointer bg-card hover:bg-card/80 rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {organization} • {date}
                </p>
              </div>
            </div>
            
            <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-muted">
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-contain p-2 transform transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-primary/5 text-primary/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground/80 text-center">
                Cliquez pour voir en détail
              </p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-4xl h-[85vh] p-6 bg-background/95 backdrop-blur-sm">
          <div className="relative h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {organization} • {date}
              </p>
            </div>

            <div className="flex-1 relative rounded-xl overflow-hidden bg-white shadow-xl">
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-contain p-4"
                priority
                quality={100}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-primary/5 text-primary/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 