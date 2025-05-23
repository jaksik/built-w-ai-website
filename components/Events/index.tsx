import { events, Event } from "../../data/event-data"
import { useState, useMemo } from 'react';

type SortOption = 'date' | 'name' | 'location';
type FilterOption = 'all' | 'upcoming' | 'past' | 'in-person' | 'virtual';

export default function RenderEvents() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState<SortOption>("date");
    const [filterBy, setFilterBy] = useState<FilterOption>("upcoming");

    const isUpcoming = (date: string) => {
        const eventDate = new Date(date);
        const today = new Date();
        return eventDate >= today;
    };

    const getDaysUntil = (date: string) => {
        const eventDate = new Date(date);
        const today = new Date();
        const diffTime = eventDate.getTime() - today.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const filteredAndSortedEvents = useMemo(() => {
        let filtered = events.filter(event => {
            const matchesSearch = 
                event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (event.venue && event.venue.toLowerCase().includes(searchTerm.toLowerCase()));

            if (filterBy === "upcoming") return matchesSearch && isUpcoming(event.date);
            if (filterBy === "past") return matchesSearch && !isUpcoming(event.date);
            if (filterBy === "in-person") return matchesSearch && event.format === "In-Person";
            if (filterBy === "virtual") return matchesSearch && event.format === "Virtual";
            
            return matchesSearch;
        });

        return filtered.sort((a, b) => {
            if (sortBy === "date") {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            }
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }
            if (sortBy === "location") {
                return a.location.localeCompare(b.location);
            }
            return 0;
        });
    }, [events, searchTerm, sortBy, filterBy]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Controls Section */}
            <div className="mb-8 space-y-4">
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search events by name, location, or venue..."
                        className="w-full pl-4 pr-10 py-3 border border-gray-200 dark:border-gray-700 rounded-xl 
                                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg
                        className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Filter and Sort Controls */}
                <div className="flex flex-wrap justify-center gap-4">
                    <select
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value as FilterOption)}
                        className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                        <option value="all">All Events</option>
                        <option value="upcoming">Upcoming Events</option>
                        <option value="past">Past Events</option>
                        <option value="in-person">In-Person Only</option>
                        <option value="virtual">Virtual Only</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                        <option value="date">Sort by Date</option>
                        <option value="name">Sort by Name</option>
                        <option value="location">Sort by Location</option>
                    </select>
                </div>
            </div>

            {/* Events Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAndSortedEvents.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No events found matching your criteria
                        </p>
                    </div>
                ) : (
                    filteredAndSortedEvents.map((event, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 border border-gray-200 
                                     dark:border-gray-700 rounded-xl p-6 hover:shadow-lg 
                                     transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {isUpcoming(event.date) && (
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                                                   text-xs font-medium bg-green-100 text-green-800">
                                        In {getDaysUntil(event.date)} days
                                    </span>
                                </div>
                            )}

                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                    {event.name}
                                </h2>
                                
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" 
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{event.date}</span>
                                </div>

                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" 
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{event.location}</span>
                                </div>

                                {event.venue && event.venue !== "Not specified" && (
                                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" 
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span>{event.venue}</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full 
                                                    text-xs font-medium ${event.format === "In-Person" 
                                                    ? "bg-purple-100 text-purple-800" 
                                                    : "bg-blue-100 text-blue-800"}`}>
                                        {event.format}
                                    </span>
                                </div>

                                {event.description && (
                                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                        {event.description}
                                    </p>
                                )}

                                {event.website && event.website !== "[1]" && (
                                    <a
                                        href={event.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-4 text-blue-600 
                                                 dark:text-blue-400 hover:text-blue-800 
                                                 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <span>Visit Website</span>
                                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" 
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                                  strokeWidth={2} 
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}