import React from 'react';
import { useBeehiivSubscription } from '../../hooks/useBeehiivSubscription';

interface BeehiivMinimalFormProps {
    publicationId?: string;
    className?: string;
    placeholder?: string;
    buttonText?: string;
    enableDebugLogging?: boolean;
}

export const BeehiivMinimalForm: React.FC<BeehiivMinimalFormProps> = ({
    publicationId,
    className = "",
    placeholder = "Enter email",
    buttonText = "Subscribe",
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
            <div className={`text-center ${className}`}>
                <p className="text-green-600 dark:text-green-400 text-sm">
                    ✓ Subscribed! Check your email.
                </p>
                <button
                    onClick={() => resetSuccess()}
                    className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline mt-1"
                >
                    Subscribe another
                </button>
            </div>
        );
    }

    return (
        <div className={className}>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    disabled={isLoading}
                    autoComplete="email"
                    required
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md font-medium transition-colors text-sm whitespace-nowrap"
                >
                    {isLoading ? '...' : buttonText}
                </button>
            </form>
            {error && (
                <p className="text-red-600 dark:text-red-400 text-xs mt-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default BeehiivMinimalForm;
