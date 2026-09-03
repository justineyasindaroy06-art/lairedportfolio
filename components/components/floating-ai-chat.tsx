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
    }
  }

  if (
    text.includes("contact") ||
    text.includes("hire")
  ) {
    return {
      role: "assistant",
      content:
        "You can book a consultation with Justine using the link below.",
      link: "https://calendar.app.google/CmSjNR3wXgspUfvU6",
    }
  }

  return {
    role: "assistant",
    content:
      "Thanks for your question! For this portfolio demo, I can tell you about Justine's services, experience, AI automation work, and how to contact her.",
  }
}
