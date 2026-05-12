"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import { Award } from "lucide-react";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  date: string;
  organization: string;
  skills: string[];
  /** Aperçu image (PNG, etc.) sous `/public` */
  imagePath?: string;
  /** Document PDF servi depuis `/public` (ex. `/certificates/atos-….pdf`) */
  pdfPath?: string;
  /** Affiche le connecteur de timeline à gauche (défaut : true) */
  showTimeline?: boolean;
}

export function CertificationCard({
  title,
  date,
  organization,
  imagePath,
  pdfPath,
  skills,
  showTimeline = true,
}: CertificationCardProps) {
  if (!imagePath && !pdfPath) {
    return null;
  }

  const dialog = (
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
            {imagePath ? (
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-contain p-2 transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
                loading="lazy"
              />
            ) : pdfPath ? (
              <div className="absolute inset-0 overflow-hidden bg-muted">
                <iframe
                  src={`${pdfPath}#toolbar=0&navpanes=0`}
                  title=""
                  aria-hidden
                  tabIndex={-1}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[118%] min-h-full w-full min-w-[102%] -translate-x-1/2 -translate-y-[48%] border-0 shadow-none transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : null}
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

      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
        <div className="p-4 border-b shrink-0">
          <h3 className="text-xl font-semibold mb-1 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {organization} • {date}
          </p>
        </div>

        {pdfPath ? (
          <>
            <div className="relative flex-1 min-h-[50vh] w-full bg-muted/30">
              <iframe
                src={`${pdfPath}#toolbar=0`}
                title={title}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="p-3 border-t shrink-0 flex flex-wrap gap-3 text-sm">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Ouvrir le PDF dans un nouvel onglet
              </a>
            </div>
          </>
        ) : imagePath ? (
          <div className="relative flex-1 min-h-[50vh] w-full bg-black/5">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-contain p-2"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );

  if (!showTimeline) {
    return dialog;
  }

  return (
    <div className="relative pl-8 border-l-2 border-violet-500/30">
      <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0" />
      {dialog}
    </div>
  );
}
