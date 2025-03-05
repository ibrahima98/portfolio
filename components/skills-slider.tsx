"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SkillsSliderProps {
  competences: {
    categorie: string;
    icon: string;
    items: string[];
  }[];
}

export function SkillsSlider({ competences }: SkillsSliderProps) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="skills-slider"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {competences.map((competence) => {
        const Icon = Icons[competence.icon as keyof typeof Icons];
        return (
          <SwiperSlide key={competence.categorie}>
            <Card className="bg-background/50 backdrop-blur-sm 
              border-2 border-violet-500/10 dark:border-violet-500/20
              hover:border-violet-500/30 dark:hover:border-violet-500/40 
              transition-all duration-300 
              dark:bg-black/20 
              shadow-sm hover:shadow-lg
              hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 backdrop-blur-md">
                    <Icon className="h-6 w-6 text-violet-500 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground/90">{competence.categorie}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {competence.items.map((item) => (
                    <Badge 
                      key={item} 
                      variant="secondary" 
                      className="bg-muted/50 hover:bg-muted/80 
                        dark:bg-violet-500/5 dark:hover:bg-violet-500/10
                        text-foreground/80 hover:text-foreground 
                        transition-colors backdrop-blur-sm
                        border border-violet-500/10 dark:border-violet-500/20"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
} 