'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { flatDocs } from '@/lib/docs-config'
import { ArrowLeft, ArrowRight, Copy, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function DocsFooter() {
    const pathname = usePathname()
    const [copied, setCopied] = useState(false)

    const currentIndex = flatDocs.findIndex(doc => doc.href === pathname)
    const prevDoc = currentIndex > 0 ? flatDocs[currentIndex - 1] : null
    const nextDoc = currentIndex < flatDocs.length - 1 && currentIndex !== -1 ? flatDocs[currentIndex + 1] : null

    const copyAsMarkdown = async () => {
        try {
            const targetElement = document.querySelector('.prose')
            if (!targetElement) {
                console.error("Documentation content (.prose) not found on page")
                return
            }

            // Dynamically load Turndown to keep client bundle small initially
            const TurndownService = (await import('turndown')).default
            const turndownService = new TurndownService({
                headingStyle: 'atx',
                codeBlockStyle: 'fenced'
            })

            // Convert the HTML content of the documentation to markdown
            const markdown = turndownService.turndown(targetElement.innerHTML)

            await navigator.clipboard.writeText(markdown)

            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className="mt-16 pt-8 border-t border-slate-800 pb-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                {prevDoc ? (
                    <Link
                        href={prevDoc.href}
                        className="flex items-center gap-2 group text-gray-400 hover:text-emerald-400 transition-colors w-full sm:w-auto"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <div className="flex flex-col text-left">
                            <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Previous</span>
                            <span className="text-sm font-medium">{prevDoc.title}</span>
                        </div>
                    </Link>
                ) : (
                    <div className="w-full sm:w-auto"></div>
                )}

                {nextDoc ? (
                    <Link
                        href={nextDoc.href}
                        className="flex items-center gap-2 group text-gray-400 hover:text-emerald-400 transition-colors w-full sm:w-auto justify-end text-right"
                    >
                        <div className="flex flex-col text-right">
                            <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Next</span>
                            <span className="text-sm font-medium">{nextDoc.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                ) : (
                    <div className="w-full sm:w-auto"></div>
                )}
            </div>

            <div className="flex justify-center border-t border-slate-800/50 pt-8">
                <button
                    onClick={copyAsMarkdown}
                    className="flex items-center gap-2 text-xs font-medium bg-slate-800/50 hover:bg-slate-800 text-gray-300 hover:text-emerald-400 px-4 py-2 border border-slate-700/50 rounded-md transition-all group"
                >
                    {copied ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                        <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    )}
                    {copied ? 'Copied to Clipboard' : 'Copy as Markdown for LLM'}
                </button>
            </div>
        </div>
    )
}
