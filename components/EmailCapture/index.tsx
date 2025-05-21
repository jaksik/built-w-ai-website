interface EmailCatptureProps {
    height?: number;
    maxWidth?: number;
}

export default function EmailCatpture({ height = 60, maxWidth = 430 }: EmailCatptureProps) {
    return (
        <div className="bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-8 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Stay Ahead of the Curve</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Join our weekly digest of breakthrough AI capabilities and emerging possibilities.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center">
                        <iframe
                            src="https://embeds.beehiiv.com/0e9d62ca-f1b2-498f-b71a-4479175078e3?slim=true"
                            data-test-id="beehiiv-embed"
                            height={height}
                            frameBorder="0"
                            scrolling="no"
                            style={{
                                margin: 0,
                                borderRadius: '0px !important',
                                backgroundColor: 'transparent',
                                width: '100%',
                                maxWidth: `${maxWidth}px`
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}