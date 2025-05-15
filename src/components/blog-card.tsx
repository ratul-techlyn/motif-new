import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    slug: string
    date: string
    featuredImage?: {
      node: {
        sourceUrl: string
        altText: string
      }
    }
    categories?: {
      nodes: {
        name: string
        slug: string
      }[]
    }
    author?: {
      node: {
        name: string
        avatar?: {
          url: string
        }
      }
    }
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  const readTimeMinutes = Math.max(1, Math.ceil(post.excerpt.split(" ").length / 200))

  return (
    <Link href={`/blog/${post.slug}`} className="group relative block h-[400px] w-[500px] overflow-hidden rounded-lg">
      {/* Image with gradient overlay */}
      <div className="relative h-full w-full">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}

        {/* Updated gradient overlay using Tailwind classes */}
        <div className="absolute inset-0 blog-card-gradient" />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Title */}
        <h3 className="mb-4 text-base font-bold leading-tight line-clamp-2 min-h-[2.5rem]">{post.title}</h3>

        {/* Meta information */}
        <div className="flex items-center justify-between text-sm text-white/80">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {post.categories &&
              post.categories.nodes.length > 0 &&
              post.categories.nodes.slice(0, 2).map((category) => (
                <span
                  key={category.slug}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                >
                  {category.name}
                </span>
              ))}
          </div>

          {/* Read time */}
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTimeMinutes} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

