"use server"

export default async function sendContact({ name, email, message }: { name: string; email: string; message: string }) {
  console.log("sendContact", { name, email, message })
  const url = "https://hooks.slack.com/services/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"

  const data = {
    text: `name: ${name}\nemail: ${email}\n----------------------------------\n${message}\n----------------------------------\n`,
  }

  await fetch(url, { method: "POST", body: JSON.stringify(data) })

  return { status: "ok" }
}
