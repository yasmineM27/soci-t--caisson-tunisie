"use server"

import { Resend } from "resend"

// Initialiser Resend avec votre clé API
// Vous pouvez obtenir une clé gratuite sur https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY)

// Fonction pour envoyer un email
export async function sendEmail(subject: string, content: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["yasminemassoudi26@gmail.com"], // Votre adresse email
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

// Fonction pour envoyer un message WhatsApp
export async function sendWhatsApp(message: string) {
  try {
    // Numéro de téléphone WhatsApp Business (format international sans +)
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
    const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER // Votre numéro personnel
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN

    const response = await fetch(`https://graph.facebook.com/v17.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipientNumber,
        type: "text",
        text: { body: message },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Erreur d'envoi WhatsApp:", data)
      return { success: false, error: data }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Exception lors de l'envoi WhatsApp:", error)
    return { success: false, error }
  }
}

// Fonction pour formater les données du formulaire de contact
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

  const whatsappContent = `
📬 *Nouveau message de contact*
*Nom:* ${name}
*Email:* ${email}
*Téléphone:* ${phone}
*Société:* ${company || "Non spécifié"}
*Sujet:* ${subject}
*Préférence:* ${contactPreference}
*Message:* ${message}
  `

  // Envoyer email
  await sendEmail(`Nouveau message de contact: ${subject}`, emailContent)

  // Envoyer WhatsApp
  await sendWhatsApp(whatsappContent)

  return { success: true }
}

// Fonction pour formater les données du formulaire de rendez-vous
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

  const whatsappContent = `
📅 *Nouvelle demande de rendez-vous*
*Nom:* ${name}
*Email:* ${email}
*Téléphone:* ${phone}
*Date:* ${date}
*Heure:* ${time}
*Message:* ${message || "Aucun message"}
  `

  // Envoyer email
  await sendEmail("Nouvelle demande de rendez-vous", emailContent)

  // Envoyer WhatsApp
  await sendWhatsApp(whatsappContent)

  return { success: true }
}

// Fonction pour formater les données du formulaire de commande
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

  // Formater les produits pour WhatsApp
  let productsText = ""
  cartItems.forEach((item) => {
    productsText += `${item.name} - Quantité: ${item.quantity}\n`
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

  const whatsappContent = `
🛒 *Nouvelle commande*
*Client:* ${firstName} ${lastName}
*Email:* ${email}
*Téléphone:* ${phone}
*Adresse:* ${address}, ${city}, ${postalCode}
*Paiement:* ${paymentMethod === "cash" ? "À la livraison" : "Virement bancaire"}
*Notes:* ${notes || "Aucune note"}

*Produits commandés:*
${productsText}
  `

  // Envoyer email
  await sendEmail("Nouvelle commande", emailContent)

  // Envoyer WhatsApp
  await sendWhatsApp(whatsappContent)

  return { success: true }
}
