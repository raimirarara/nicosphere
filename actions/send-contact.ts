"use server"

export default async function sendContact({ name, email, message }: { name: string; email: string; message: string }) {
  console.log("sendContact", { name, email, message })
  if (!name || !email || !message) throw new Error("Missing required fields")
  const url = process.env.SLACK_WEBHOOK_URL as string
  if (!url) {
    throw new Error("Missing SLACK_WEBHOOK_URL")
  }

  const data = {
    text: `name: ${name}\nemail: ${email}\n----------------------------------\n${message}\n----------------------------------\n`,
  }

  await fetch(url, { method: "POST", body: JSON.stringify(data) })

  return { status: "ok" }
}
