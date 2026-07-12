import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function enquiryEmailHtml({
  name,
  company,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:9px 12px; font-size:0.7rem; text-transform:uppercase; letter-spacing:0.06em; color:#6b7280; width:120px; vertical-align:top; border-bottom:1px solid #e5e7eb;">${label}</td>
      <td style="padding:9px 12px; font-size:0.9rem; color:#111827; vertical-align:top; border-bottom:1px solid #e5e7eb;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0; padding:0; background:#f3f4f6; font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6; padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(150deg,#142338 0%,#1e3a5f 60%,#24466f 100%); padding:28px 32px;">
              <div style="width:60px; height:4px; background:#d4af37; border-radius:2px; margin-bottom:14px;"></div>
              <div style="color:#ffffff; font-size:1.3rem; font-weight:700;">Website Enquiry</div>
              <div style="color:#d4af37; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Bonram (Pty) Ltd</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", name)}
                ${row("Company", company || "Not provided")}
                ${row("Email", email)}
                ${row("Phone", phone || "Not provided")}
                ${row("Service", service || "Not specified")}
              </table>
              <div style="margin-top:18px; background:#f9fafb; border-left:4px solid #d4af37; padding:14px 16px; border-radius:4px;">
                <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.06em; color:#6b7280; margin-bottom:6px;">Message</div>
                <div style="font-size:0.9rem; color:#111827; white-space:pre-wrap; line-height:1.5;">${message}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px 32px; border-top:1px solid #e5e7eb; margin-top:20px;">
              <div style="font-size:0.75rem; color:#6b7280;">Bonram (Pty) Ltd &middot; Reg 2013/013325/07 &middot; BBBEE Level 1 &middot; bonram.co.za</div>
            </td>
          </tr>
          <tr>
            <td style="background:#1e3a5f; height:6px;"></td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Bonram Website <info@bonram.co.za>",
      to: "info@bonram.co.za",
      replyTo: email,
      subject: `Website Enquiry from ${name}`,
      html: enquiryEmailHtml({ name, company, email, phone, service, message }),
      text: `New enquiry from Bonram website

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}

---
Sent from bonram.co.za contact form`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
