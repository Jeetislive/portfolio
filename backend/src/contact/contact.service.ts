import { Injectable, Logger } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import { CreateContactDto } from './create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private transporter: Transporter | null = null;

  constructor() {
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      this.transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      this.logger.log('SMTP transporter initialized');
    } else {
      this.logger.warn('SMTP not configured — emails will be logged only');
    }
  }

  async submitContact(dto: CreateContactDto) {
    this.logger.log(`New contact from: ${dto.name} <${dto.email}>`);

    if (this.transporter && process.env.CONTACT_EMAIL_TO) {
      try {
        await this.transporter.sendMail({
          from: `"${dto.name}" <${process.env.SMTP_USER}>`,
          replyTo: dto.email,
          to: process.env.CONTACT_EMAIL_TO,
          subject: `[Portfolio] ${dto.subject}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"></head>
            <body style="margin:0;padding:0;background-color:#f4f4f8;font-family:system-ui,-apple-system,'Segoe UI',sans-serif">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f8;padding:32px 16px">
                <tr>
                  <td align="center">
                    <table role="presentation" width="540" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
                      <tr>
                        <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px 36px;text-align:center">
                          <div style="font-size:40px;margin-bottom:8px">📬</div>
                          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600">New Portfolio Message</h1>
                          <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px">Someone just reached out from your site</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 36px 0">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                            <tr>
                              <td style="padding:24px 0 8px;border-bottom:1px solid #e5e7eb">
                                <div style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px">Sender</div>
                                <div style="color:#111827;font-size:16px;font-weight:600">${dto.name}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:16px 0 8px;border-bottom:1px solid #e5e7eb">
                                <div style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px">Email</div>
                                <a href="mailto:${dto.email}" style="color:#6366f1;font-size:15px;text-decoration:none">${dto.email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:16px 0 8px;border-bottom:1px solid #e5e7eb">
                                <div style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px">Subject</div>
                                <div style="color:#111827;font-size:15px;font-weight:500">${dto.subject}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 36px 8px">
                          <div style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Message</div>
                          <div style="color:#374151;font-size:15px;line-height:1.7;background-color:#f9fafb;border-radius:10px;padding:20px;border:1px solid #e5e7eb;margin-bottom:8px">
                            ${dto.message.replace(/\n/g, '<br/>')}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 36px 32px;text-align:center;border-top:1px solid #e5e7eb">
                          <p style="margin:0;color:#9ca3af;font-size:13px">You can reply directly to this email to respond to ${dto.name}.</p>
                        </td>
                      </tr>
                    </table>
                    <p style="color:#9ca3af;font-size:12px;margin-top:16px">Portfolio Contact Form · jeetislive-portfolio.vercel.app</p>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
        });
        this.logger.log(`Email sent to ${process.env.CONTACT_EMAIL_TO}`);
      } catch (err) {
        this.logger.error(`Failed to send email: ${(err as Error).message}`);
      }
    } else {
      this.logger.log(`   Subject: ${dto.subject}`);
      this.logger.log(`   Message: ${dto.message}`);
    }

    return {
      success: true,
      message: 'Thank you for reaching out! Jeet will get back to you soon.',
      receivedAt: new Date().toISOString(),
    };
  }
}
