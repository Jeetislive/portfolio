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
            <h3>New contact from ${dto.name}</h3>
            <p><strong>Email:</strong> ${dto.email}</p>
            <p><strong>Subject:</strong> ${dto.subject}</p>
            <hr/>
            <p>${dto.message.replace(/\n/g, '<br/>')}</p>
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
