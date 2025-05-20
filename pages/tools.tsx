import GetTools from "@/components/Tools"

export default function ToolsPage() {
  return (
    <div className="space-y-8 pb-8 min-h-screen">
      <div className="container mx-auto px-4 py-8">

        {/* Page Header Section */}
        <section className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gray-900 dark:text-gray-100 font-inter">
            AI Tools
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            Discover and compare the most powerful AI tools available today. Filter by category to find exactly what you need.
          </p>

        {/* Stylish Line Break */}
          <div className="max-w-lg mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
          </div>
        </section>

        {/* Tools directory component */}
        <GetTools />

      </div>
    </div>
  )
}