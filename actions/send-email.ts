"use server"

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  // Validate the data
  if (!data.name || !data.email || !data.message) {
    throw new Error("Missing required fields")
  }

  try {
    // In a real application, you would use a service like Nodemailer, SendGrid, or Resend
    // For this example, we'll simulate a successful email send

    // Example with Nodemailer (commented out)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })
    */

    // For demonstration, we'll just wait a bit to simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log the message for demonstration purposes
    console.log("Email sent:", {
      name: data.name,
      email: data.email,
      message: data.message,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
