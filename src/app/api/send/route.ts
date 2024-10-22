import { Resend } from 'resend';
import { NewFeatureEmailTemplate } from '../../../components/new-feature-email-template.tsx'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Digital Tickets <hola@digitaltickets.co>',
      to: ['admon.digitalticket@gmail.com'],
      subject: 'Magic Link - Digital Tickets',
      react: NewFeatureEmailTemplate({}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
