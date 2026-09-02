"use client"

import { useState } from "react"

export function FloatingAiChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl">
          
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-white">
              AI Assistant
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="text-sm text-gray-300">
            Hi! 👋 How can I help you today?
          </div>

        </div>
      )}

      {/* FLOATING AI BUBBLE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-3xl shadow-lg transition hover:scale-110"
        aria-label="Open AI Assistant"
      >
        🤖
      </button>
    </>
  )
}
