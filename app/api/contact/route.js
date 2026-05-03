import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // ✅ your mail
      to: process.env.EMAIL_USER,

      // ✅ IMPORTANT: reply goes to user
      replyTo: email,

      subject: `New Message from ${name}`,

      // ❌ Remove text (optional)
      // text: "..."

      // ✅ HTML UI EMAIL DESIGN
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(90deg, #7c3aed, #3b82f6); color: white; padding: 20px; text-align: center;">
              <h2>📩 New Contact Message</h2>
            </div>

            <!-- Body -->
            <div style="padding: 20px; color: #333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              
              <div style="margin-top: 15px;">
                <strong>Message:</strong>
                <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                  ${message}
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #777;">
              Sent from your Portfolio Website 🚀
            </div>

          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}