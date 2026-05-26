'use client';

import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function CaseStudyImage({ src, alt, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={1200}
      height={900}
      sizes="(max-width: 768px) 100vw, 50vw"
      loading="lazy"
      onError={(e) => {
        (e.currentTarget.parentElement as HTMLElement | null)?.style.setProperty('display', 'none');
      }}
    />
  );
}
