"use server"

// This file is no longer used but kept for reference

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  // This function is no longer used
  console.log("Email functionality has been removed")
  return { success: false, message: "Email functionality has been removed" }
}
