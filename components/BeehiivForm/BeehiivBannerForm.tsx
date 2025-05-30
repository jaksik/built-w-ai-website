import React from 'react';
import { useBeehiivSubscription } from '../../hooks/useBeehiivSubscription';

interface BeehiivBannerFormProps {
    publicationId?: string;
    className?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    placeholder?: string;
    enableDebugLogging?: boolean;
}

export const BeehiivBannerForm: React.FC<BeehiivBannerFormProps> = ({
    publicationId,
    className = "",
    title = "🚀 Join thousands of AI enthusiasts",
    description = "Get weekly insights, tools, and trends in artificial intelligence",
    buttonText = "Subscribe",
    placeholder = "Enter your email address",
    enableDebugLogging = false
}) => {
    const {
        email,
        setEmail,
        isLoading,
        isSuccess,
        error,
        subscribe,
        resetSuccess
    } = useBeehiivSubscription({
        publicationId,
        enableDebugLogging
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await subscribe(email);
    };

    if (isSuccess) {
        return (
            <div className={`bg-gray-600 dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center ${className}`}>
                <div className="text-green-600 dark:text-green-400 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Subscribed! You have successfully opted in
                </h3>
                <p className="text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Check your email for a confirmation message.
                </p>
                <button
                    onClick={() => resetSuccess()}
                    className="mt-4 px-4 py-2 bg-black dark:bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700 rounded-md font-semibold transition-colors"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                    Subscribe another email
                </button>
            </div>
        );
    }

    return (
        <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 lg:p-8 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {title}
                        </h2>
                        <p className="text-md text-gray-600 dark:text-gray-300 mb-4 lg:mb-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {description}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <form onSubmit={handleSubmit} className="group w-full">
                            <div className="flex flex-col">
                                <div className="flex w-full flex-col items-center sm:flex-row overflow-hidden p-1 rounded-lg bg-gray-50 dark:bg-gray-700" style={{ border: '2px solid rgb(0, 0, 0)' }}>
                                    <div className="flex w-full items-center bg-gray-50 dark:bg-gray-700 pt-3 pb-4">
                                        <div className="px-3 text-black dark:text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={placeholder}
                                            className="z-10 w-full border-none bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                            disabled={isLoading}
                                            autoComplete="email"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="cursor-pointer px-5 py-3 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-md bg-black dark:bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 transition-colors"
                                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Subscribing...
                                            </div>
                                        ) : (
                                            buttonText
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>

                        {error && (
                            <div className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 mt-4">
                                {error}
                            </div>
                        )}   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeehiivBannerForm;
