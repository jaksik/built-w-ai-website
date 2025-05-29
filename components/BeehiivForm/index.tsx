import React, { useState, useEffect } from 'react';

interface BeehiivFormProps {
    publicationId?: string;
    className?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    placeholder?: string;
}

export const BeehiivForm: React.FC<BeehiivFormProps> = ({
    publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID,
    className = "",
    title = "Stay Updated",
    description = "Get the latest AI tools and insights delivered right to your inbox.",
    buttonText = "Subscribe",
    placeholder = "Enter your email address"
}) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    // Debug logging on component mount
    useEffect(() => {
        console.log('🔧 BeehiivForm component mounted');
        console.log('🔧 Environment variables check:');
        console.log('  - NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID:', process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID);
        console.log('🔧 Resolved publication ID:', publicationId);
        console.log('🔧 Props:', { className, title, description, buttonText, placeholder });
    }, [publicationId, className, title, description, buttonText, placeholder]);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('🚀 Form submission started');
        console.log('📧 Email:', email);
        console.log('🔑 Publication ID:', publicationId);

        if (!email) {
            console.log('❌ No email provided');
            setError('Email address is required');
            return;
        }

        if (!validateEmail(email)) {
            console.log('❌ Invalid email format');
            setError('Please enter a valid email address');
            return;
        }

        if (!publicationId) {
            console.log('❌ No publication ID found');
            setError('Configuration error: Missing publication ID');
            return;
        }

        console.log('✅ Validation passed, calling API');
        setIsLoading(true);
        setError('');

        try {
            console.log('🌐 Making API call to /api/subscribe');

            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            console.log('📡 API Response status:', response.status);

            const data = await response.json();
            console.log('📡 API Response data:', data);

            if (response.ok && data.success) {
                console.log('✅ Subscription successful!');
                setIsSuccess(true);
                setEmail('');
            } else {
                console.error('❌ Subscription failed:', data);
                setError(data.error || 'Subscription failed. Please try again.');
            }

        } catch (err) {
            console.error('💥 Subscription error:', err);
            console.error('💥 Error details:', {
                message: err instanceof Error ? err.message : 'Unknown error',
                stack: err instanceof Error ? err.stack : undefined
            });
            setError(`Failed to subscribe: ${err instanceof Error ? err.message : 'Please try again later'}`);
        } finally {
            setIsLoading(false);
            console.log('🏁 Form submission completed');
        }
    };

    if (isSuccess) {
        return (
            <div className={`bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border dark:border-gray-700 p-6 text-center ${className}`}>
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
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-4 py-2 bg-black dark:bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700 rounded-md font-semibold transition-colors"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                    Subscribe another email
                </button>
            </div>
        );
    }

    return (
        <div className={`p-4 ${className}`}>
            <div className="text-center mb-6">
                {/* <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          {title}
        </h3> */}
                {/* <p className="text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}> */}
                <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
                    {description}
                </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center">
                <div className="w-full max-w-[600px]">
                    <form onSubmit={handleSubmit} className="group w-full">
                        <div className="flex flex-col">
                            <div className="flex w-full flex-col items-center sm:flex-row overflow-hidden p-1 rounded-lg bg-gray-50 dark:bg-gray-700" style={{ border: '2px solid rgb(0, 0, 0)' }}>
                                <div className="flex w-full items-center bg-gray-50 dark:bg-gray-700">
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
                </div>
            </div>

            {error && (
                <div className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 mt-4">
                    {error}
                </div>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
            </p>
        </div>
    );
};

export default BeehiivForm;