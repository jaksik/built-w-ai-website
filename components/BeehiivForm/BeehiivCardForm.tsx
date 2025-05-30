import React from 'react';
import { useBeehiivSubscription } from '../../hooks/useBeehiivSubscription';

interface BeehiivCardFormProps {
    publicationId?: string;
    className?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    placeholder?: string;
    enableDebugLogging?: boolean;
}

export const BeehiivCardForm: React.FC<BeehiivCardFormProps> = ({
    publicationId,
    className = "",
    title = "Stay in the loop",
    description = "Join our newsletter for the latest updates and insights.",
    buttonText = "Join Newsletter",
    placeholder = "Your email address",
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
            <div className={`bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center ${className}`}>
                <div className="text-green-600 dark:text-green-400 mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Welcome aboard! 🎉
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    You're all set! Check your email to confirm your subscription.
                </p>
                <button
                    onClick={() => resetSuccess()}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                    Subscribe another email
                </button>
            </div>
        );
    }

    return (
        <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 ${className}`}>
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        disabled={isLoading}
                        autoComplete="email"
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none"
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
            </form>

            {error && (
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 text-sm">
                        {error}
                    </p>
                </div>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                No spam, ever. Unsubscribe at any time.
            </p>
        </div>
    );
};

export default BeehiivCardForm;
