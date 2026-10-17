export interface SendEmailPayload {
  name: string;
  email: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  unconfigured?: boolean;
}

export async function sendContactEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Honest state check: If credentials are not supplied, do not claim fake delivery
  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      unconfigured: true,
      message: "Email service is not yet configured. Please configure EmailJS credentials in .env.",
    };
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: payload.name,
          reply_to: payload.email,
          message: payload.message,
        },
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      };
    } else {
      const errText = await response.text();
      return {
        success: false,
        message: `Failed to deliver message: ${errText || "Unknown service error"}`,
      };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Network error occurred";
    return {
      success: false,
      message: `Error sending message: ${errorMsg}`,
    };
  }
}
