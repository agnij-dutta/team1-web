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

  const allImages = [...images, ...images, ...images]

  return (
    <section className="w-full py-24 bg-black/50 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="max-w-5xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-5xl font-display tracking-tight mb-6">Our Community</h2>
        <p className="text-white/60 text-xl max-w-2xl mx-auto">
          Join a vibrant ecosystem of developers, creators, and innovators building the future of Web3.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[200px] z-10 grid-fade-left pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[200px] z-10 grid-fade-right pointer-events-none" />
        <div className="flex gap-6 animate-scroll hover:pause">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative min-w-[400px] h-[300px] rounded-2xl overflow-hidden flex-shrink-0 transform transition-transform hover:scale-105 hover:-translate-y-2"
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

