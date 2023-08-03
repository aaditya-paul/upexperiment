import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent egestas libero at justo eleifend cursus. Curabitur
          eu neque gravida, accumsan lacus id, hendrerit quam. Nam
          ultricies metus varius arcu pretium tristique. Nulla commodo
          metus tortor, at pellentesque leo malesuada a. Nulla eget
          luctus nunc.
        </p>
        <p>
          Pellentesque tempus neque tellus, in gravida eros mattis at.
          Ut condimentum, lacus non commodo ultricies, massa nisi
          blandit ligula, viverra dignissim nibh lectus et libero.
          Cras porta ac lorem at pulvinar. Mauris non diam pulvinar,
          iaculis enim quis, elementum sem. Nam molestie ac sapien
          eget bibendum. Aliquam id nulla nunc. Praesent tortor dui,
          iaculis ac odio et, pulvinar varius quam. Curabitur rutrum
          elit eu placerat molestie.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
