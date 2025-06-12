"use client"

import { useState, useEffect, useRef, type MouseEvent } from "react"
import { fetchPosts } from "@/lib/fetch-posts"
import BlogCard from "./blog-card"

interface BlogCarouselProps {
  postsPerPage?: number
  categoryId?: number
  categorySlug?: string
  title?: string
}

export default function BlogCarousel({
  postsPerPage = 3,
  categoryId,
  categorySlug,
  title = "Latest Posts",
}: BlogCarouselProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [, setError] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const categoryFilter = categoryId || categorySlug ? { id: categoryId, slug: categorySlug } : undefined
        const fetchedPosts = await fetchPosts(postsPerPage, categoryFilter)
        setPosts(fetchedPosts)
      } catch (err) {
        setError("Failed to load blog posts")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    // loadPosts()
  }, [categoryId, categorySlug, postsPerPage])



  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft)
    setScrollLeft(scrollContainerRef.current!.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current!.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="w-full py-8 overflow-hidden my-40" style={{ paddingLeft: "15vw" }}>
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {/* <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="hover:bg-transparent focus:ring-0 text-white"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="hover:bg-transparent focus:ring-0 text-white"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div> */}
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {loading ? (
            <div className="flex gap-8">
              {Array.from({ length: postsPerPage }).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-[500px] h-[400px] bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="flex gap-8">
              {posts.map((post, index) => (
                <div key={`${post.id}-${index}`} className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

