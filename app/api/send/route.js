import { EmailTemplate, EmailTemplate2 } from '../../../components/email-template.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const json = await req.json();
    const { name, email, message } = json;
    try {
        const data = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: ['ktirumalaachari@gmail.com'],
            reply_to: email,
            subject: `New message from ${name}`,
            react: EmailTemplate({ messageData: message, name, email }),
        });
        resend.emails.send({
            from: `K Tirumala Achari <ktirumalaachari@gmail.com>`,
             to: [email],
            subject: `Reply from K Tirumala Achari`,
            react: EmailTemplate2({ name}),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error.message });
    }
}
