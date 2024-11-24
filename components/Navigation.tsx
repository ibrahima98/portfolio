"use client";

import { cn } from '@/lib/utils';
import { BookOpen, FolderKanban, Github, GraduationCap, Home, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const liens = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '#parcours', label: 'Parcours', icon: GraduationCap },
    { href: '/projets', label: 'Projets', icon: FolderKanban },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-[0.5px] dark:border-neutral-800/30' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Portfolio
            </Link>
          </div>

          {/* Navigation Bureau */}
          <div className="hidden md:flex items-center space-x-4">
            {liens.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                onClick={(e) => handleClick(e, lien.href)}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2',
                  pathname === lien.href
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {lien.icon && <lien.icon className="h-4 w-4" />}
                {lien.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <ModeToggle />
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/80 backdrop-blur-md">
            {liens.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                onClick={(e) => {
                  handleClick(e, lien.href);
                  setIsOpen(false);
                }}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2',
                  pathname === lien.href
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {lien.icon && <lien.icon className="h-4 w-4" />}
                {lien.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-3 py-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;





