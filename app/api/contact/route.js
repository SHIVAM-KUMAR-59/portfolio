import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 },
      )
    }

    console.log(name, email, message)

    await resend.emails.send({
      from: 'Portfolio <shivamkumar.work>',
      to: ['shivamkumardev01@gmail.com'],
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200 },
    )
  } catch (error) {
    console.error('Email sending error:', error)

    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
    })
  }
}
