import GetArticles from "@/components/Articles"

export default function NewsPage() {
  return (
    <div className="space-y-8 pb-8 min-h-screen">
      <div className="container mx-auto px-1 py-8">
        <section className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gray-900 dark:text-gray-100 font-inter">
            AI News
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Understand the evolution and trajectory of artificial intelligence through the latest news and updates.
            {/* Stay informed about the latest product releases, industry shifts, and frontier research. */}
          </p>
          {/* Stylish Line Break */}
          <div className="max-w-lg mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
          </div>
        </section>
        <GetArticles />
      </div>
    </div>
  )
}