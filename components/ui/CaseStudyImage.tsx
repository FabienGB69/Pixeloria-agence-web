'use client';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function CaseStudyImage({ src, alt, className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        (e.currentTarget.parentElement as HTMLElement | null)?.style.setProperty('display', 'none');
      }}
    />
  );
}
