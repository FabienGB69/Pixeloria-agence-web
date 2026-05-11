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
      onError={(e) => {
        (e.currentTarget.parentElement as HTMLElement | null)?.style.setProperty('display', 'none');
      }}
    />
  );
}
