import Image from "next/image"

export function CommunitySection() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EmDmHWzsXoexlJAQ4tAXlh5DJvGtzy.png",
      alt: "Modern cityscape",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VWxPxwbGIjlaAYAD6CQdBEubR0HKnf.png",
      alt: "Luxury house",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HedbHCvFyRM8HIrwKVPgCVRBezVZNA.png",
      alt: "Mountain landscape",
    },
  ]

  // Duplicate images for seamless scrolling
  const allImages = [...images, ...images]

  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold tracking-tighter">Our Community</h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-scroll hover:pause">
          {allImages.map((image, index) => (
            <div key={index} className="relative min-w-[400px] h-[300px] rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

