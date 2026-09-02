"use client"

import { useState } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
  link?: string
}

export function FloatingAiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm Justine's AI Assistant. Ask me about her services, experience, or AI automation.",
    },
  ])

  function getResponse(message: string): Message {
  const text = message.toLowerCase()

  if (
    text.includes("consultation") ||
    text.includes("book") ||
    text.includes("schedule") ||
    text.includes("calendar")
  ) {
    return {
      role: "assistant",
      content: "You can book a consultation with Justine here:",
      link: "https://calendar.app.google/CmSjNR3wXgspUfvU6",
    }
  }

  if (text.includes("service")) {
    return {
      role: "assistant",
      content:
        "Justine offers Executive Assistant support, AI Automation, Workflow Optimization, and Process Documentation.",
    }
  }

  if (text.includes("experience") || text.includes("background")) {
    return {
      role: "assistant",
      content:
        "Justine is a Freelance Executive Assistant who supports professionals by building organized workflows and efficient systems.",
  const reply = getResponse(input)
      role: "assistant",
      content:
        "Justine is building AI-powered workflows to reduce repetitive work and create more efficient business processes.",
    }
  }

  if (
  text.includes("contact") ||
  text.includes("hire") ||
  text.includes("book") ||
  text.includes("consultation") ||
  text.includes("schedule")
) {
    return {
  role: "assistant",
  content: "You can book a consultation with Justine using the link below.",
  link: "https://calendar.app.google/CmSjNR3wXgspUfvU6",
}

  return {
    role: "assistant",
    content:
      "Thanks for your question! For this portfolio demo, I can tell you about Justine's services, experience, AI automation work, and how to contact her.",
  }
}

  function sendMessage() {
    if (!input.trim()) return

    const userMessage: Message = {
      role: "user",
      content: input,
    }

const response = getResponse(input)

const reply: Message = {
  role: "assistant",
  content: response.content,
  link: response.link,
}

    setMessages((current) => [...current, userMessage, reply])
    setInput("")
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex w-80 flex-col rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <h3 className="font-semibold text-white">
              AI Assistant
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex max-h-80 min-h-64 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  message.role === "user"
                    ? "ml-auto bg-purple-600 text-white"
                    : "bg-zinc-800 text-gray-200"
                }`}
              >
                <p>{message.content}</p>

{message.link && (
  <a
    href={message.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block text-sm font-medium text-purple-400 underline hover:text-purple-300"
  >
    Schedule a Consultation →
  </a>
)}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage()
              }}
              placeholder="Type your message..."
              className="min-w-0 flex-1 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
            />

            <button
              onClick={sendMessage}
              className="rounded-lg bg-purple-600 px-3 py-2 text-sm text-white hover:bg-purple-500"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-3xl shadow-lg"
        aria-label="Open AI Assistant"
      >
        🤖
      </button>
    </>
  )
}
