"use server"

import { Resend } from "resend"

// Initialiser Resend avec votre clé API
// Vous pouvez obtenir une clé gratuite sur https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY)

// Adresse email de réception (votre email)
const RECIPIENT_EMAIL = "yasminemassoudi26@gmail.com"

// Fonction pour envoyer un email
export async function sendEmail(subject: string, content: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Caisson Tunisie <onboarding@resend.dev>", // Vous pouvez personnaliser ceci
      to: [RECIPIENT_EMAIL],
      subject: subject,
      html: content,
    })

    if (error) {
      console.error("Erreur d'envoi d'email:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Exception lors de l'envoi d'email:", error)
    return { success: false, error }
  }
}

// Fonction pour traiter le formulaire de contact
export async function handleContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = formData.get("company") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const contactPreference = formData.get("contactPreference") as string

  const emailContent = `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone}</p>
    <p><strong>Société:</strong> ${company || "Non spécifié"}</p>
    <p><strong>Sujet:</strong> ${subject}</p>
    <p><strong>Préférence de contact:</strong> ${contactPreference}</p>
    <p><strong>Message:</strong> ${message}</p>
  `

  // Envoyer email
  const result = await sendEmail(`Nouveau message de contact: ${subject}`, emailContent)
  return result
}

// Fonction pour traiter le formulaire de rendez-vous
export async function handleAppointmentForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const date = formData.get("date") as string
  const time = formData.get("time") as string
  const message = formData.get("message") as string

  const emailContent = `
    <h2>Nouvelle demande de rendez-vous</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Heure:</strong> ${time}</p>
    <p><strong>Message:</strong> ${message || "Aucun message"}</p>
  `

  // Envoyer email
  const result = await sendEmail("Nouvelle demande de rendez-vous", emailContent)
  return result
}

// Fonction pour traiter le formulaire de commande
export async function handleOrderForm(formData: FormData, cartItems: any[]) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string
  const city = formData.get("city") as string
  const postalCode = formData.get("postalCode") as string
  const paymentMethod = formData.get("paymentMethod") as string
  const notes = formData.get("notes") as string

  // Formater les produits pour l'email
  let productsHtml = ""
  cartItems.forEach((item) => {
    productsHtml += `<p>${item.name} - Quantité: ${item.quantity}</p>`
  })

  const emailContent = `
    <h2>Nouvelle commande</h2>
    <p><strong>Client:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone}</p>
    <p><strong>Adresse:</strong> ${address}, ${city}, ${postalCode}</p>
    <p><strong>Mode de paiement:</strong> ${paymentMethod === "cash" ? "Paiement à la livraison" : "Virement bancaire"}</p>
    <p><strong>Notes:</strong> ${notes || "Aucune note"}</p>
    <h3>Produits commandés:</h3>
    ${productsHtml}
  `

  // Envoyer email
  const result = await sendEmail("Nouvelle commande", emailContent)
  return result
}
