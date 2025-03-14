import { cn } from "@/utils/cn"
import Image, { StaticImageData } from "next/image"

interface ImageCardProps {
  imageUrl: StaticImageData | string
  imageAlt: string
  imagePosition?: "left" | "right"
  children?: React.ReactNode
}

export function ImageCard({
  imageUrl,
  imageAlt,
  imagePosition,
  children,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "flex rounded-[3rem] overflow-hidden border-4 border-primary",
        {
          "flex-row-reverse": imagePosition === "right",
        }
      )}
    >
      <div className="flex flex-grow w-full max-w-[500px] h-[500px] bg-sky-500 rounded-full">
        Test
      </div>
      <div className="">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={imageAlt}
          className="rounded-full"
        />
      </div>
      <div className="p-4 md:p-8">{children}</div>
    </div>
  )
}

// Photo by <a href="https://unsplash.com/@leticiafracalossi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Letícia Fracalossi</a> on <a href="https://unsplash.com/photos/a-man-and-a-woman-are-walking-along-the-water-HQpP5qyAUkE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@matheusferrero?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matheus Ferrero</a> on <a href="https://unsplash.com/photos/row-of-four-men-sitting-on-mountain-trail-TkrRvwxjb_8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@andrewruiz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrew Ruiz</a> on <a href="https://unsplash.com/photos/man-wearing-welding-helmet-in-front-of-industrial-machine-YXSJ33Pbg7g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

// Deprecated
// Photo by <a href="https://unsplash.com/@aok_creations?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ayanda Kunene</a> on <a href="https://unsplash.com/photos/a-man-sitting-next-to-a-woman-on-a-bench-kpnSTNUQBMw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jmuniz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joel Muniz</a> on <a href="https://unsplash.com/photos/2-women-sitting-on-black-chair-KodMXENNaas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@moisamihai092?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mihai Moisa</a> on <a href="https://unsplash.com/photos/black-chairs-Djtc1T38-GY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@job_vermeulen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Job Vermeulen</a> on <a href="https://unsplash.com/photos/a-workbench-filled-with-lots-of-different-types-of-tools-gJWlckmTeYc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
