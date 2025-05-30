import React, { useEffect } from 'react';
import { useBeehiivSubscription } from '../../hooks/useBeehiivSubscription';

interface BeehiivModalFormProps {
    publicationId?: string;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    buttonText?: string;
    placeholder?: string;
    enableDebugLogging?: boolean;
}

export const BeehiivModalForm: React.FC<BeehiivModalFormProps> = ({
    publicationId,
    isOpen,
    onClose,
    title = "Don't miss out!",
    description = "Subscribe to get the latest updates delivered to your inbox.",
    buttonText = "Subscribe Now",
    placeholder = "Enter your email",
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

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Auto-close modal after successful subscription
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                onClose();
                resetSuccess();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess, onClose, resetSuccess]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 animate-scale-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {isSuccess ? (
                    <div className="text-center py-4">
                        <div className="text-green-600 dark:text-green-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            You're in! 🎉
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Check your email to confirm your subscription.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            This window will close automatically...
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-6">
                            <div className="text-blue-600 dark:text-blue-400 mb-4">
                                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {title}
                            </h2>
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
                                    autoFocus
                                    required
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors"
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
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default BeehiivModalForm;
