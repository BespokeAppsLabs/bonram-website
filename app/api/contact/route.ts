import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailBody = `
New enquiry from Bonram website

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}

---
Sent from bonram.co.za contact form
    `.trim();

    const mailtoLink = `mailto:info@bonram.co.za?subject=Website Enquiry from ${name}&body=${encodeURIComponent(emailBody)}`;

    console.log("Contact form submission:", { name, company, email, service });
    console.log("Email content:", emailBody);
    console.log("Mailto link:", mailtoLink);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
