import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials:
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
});

const TO_EMAIL = "jameshbelk@gmail.com";
const FROM_EMAIL = process.env.SES_FROM_EMAIL || "jameshbelk@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, fromZip, toZip, moveDate, homeSize, message } =
      body;

    // Basic validation
    if (!name || !email || !phone || !fromZip || !toZip || !moveDate || !homeSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const homeSizeLabels: Record<string, string> = {
      studio: "Studio / Room",
      "1bed": "1 Bedroom",
      "2bed": "2 Bedrooms",
      "3bed": "3 Bedrooms",
      "4bed": "4+ Bedrooms",
      office: "Office / Commercial",
    };

    const emailBody = `
🚚 NEW MOVING QUOTE REQUEST — A Right Movers
${"=".repeat(50)}

CUSTOMER INFORMATION
  Name:     ${name}
  Email:    ${email}
  Phone:    ${phone}

MOVE DETAILS
  From:     ${fromZip}
  To:       ${toZip}
  Date:     ${moveDate}
  Size:     ${homeSizeLabels[homeSize] || homeSize}

${message ? `ADDITIONAL NOTES\n  ${message}\n` : ""}
${"=".repeat(50)}
⚡ Respond within 1 hour for best conversion!
📞 Call the customer at: ${phone}
    `.trim();

    const htmlBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0F2341 0%, #1B3A6B 40%, #2B5EA7 100%); padding: 24px; text-align: center;">
    <h1 style="color: #FFFFFF; margin: 0; font-size: 24px;">🚚 New Quote Request</h1>
    <p style="color: #4A80C4; margin: 8px 0 0;">A Right Movers Lead</p>
  </div>
  
  <div style="padding: 24px; background: #F5F7FA;">
    <h2 style="color: #0F2341; font-size: 18px; margin-top: 0;">Customer Information</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #8E9196; width: 100px;">Name</td><td style="padding: 8px 0; color: #0F2341; font-weight: bold;">${name}</td></tr>
      <tr><td style="padding: 8px 0; color: #8E9196;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2B5EA7;">${email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #8E9196;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2B5EA7; font-weight: bold; font-size: 18px;">${phone}</a></td></tr>
    </table>
    
    <h2 style="color: #0F2341; font-size: 18px; margin-top: 24px;">Move Details</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #8E9196; width: 100px;">From</td><td style="padding: 8px 0; color: #0F2341;">${fromZip}</td></tr>
      <tr><td style="padding: 8px 0; color: #8E9196;">To</td><td style="padding: 8px 0; color: #0F2341;">${toZip}</td></tr>
      <tr><td style="padding: 8px 0; color: #8E9196;">Date</td><td style="padding: 8px 0; color: #0F2341; font-weight: bold;">${moveDate}</td></tr>
      <tr><td style="padding: 8px 0; color: #8E9196;">Size</td><td style="padding: 8px 0; color: #0F2341;">${homeSizeLabels[homeSize] || homeSize}</td></tr>
    </table>
    
    ${message ? `<h2 style="color: #0F2341; font-size: 18px; margin-top: 24px;">Additional Notes</h2><p style="color: #0F2341; background: white; padding: 12px; border-radius: 4px;">${message}</p>` : ""}
  </div>
  
  <div style="background: #0F2341; padding: 16px; text-align: center;">
    <p style="color: #4A80C4; margin: 0; font-size: 14px;">⚡ Respond within 1 hour for best conversion!</p>
    <a href="tel:${phone}" style="color: #FFFFFF; font-size: 18px; font-weight: bold; text-decoration: none; display: inline-block; margin-top: 8px;">📞 Call ${name}: ${phone}</a>
  </div>
</div>
    `.trim();

    const command = new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: {
        ToAddresses: [TO_EMAIL],
      },
      Message: {
        Subject: {
          Data: `🚚 New Quote: ${name} — ${fromZip} → ${toZip} (${homeSizeLabels[homeSize] || homeSize})`,
        },
        Body: {
          Text: { Data: emailBody },
          Html: { Data: htmlBody },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
