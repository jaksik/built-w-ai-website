import GetNews from "@/components/GetNews"


export default function NewsPage() {
  return (
    <div className="space-y-8 pb-8 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight lg:text-5xl text-gray-900 dark:text-gray-100">
            AI News
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            Understand the AI landscape through our curated list of articles in 4 key AI categories.
          </p>
        </section>
        <GetNews />
      </div>
    </div>
  )
}