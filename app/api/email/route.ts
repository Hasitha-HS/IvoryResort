import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // In production: send email via SendGrid/SES here.
    // For now return a mock response.
    console.log('Email API received:', body)
    return NextResponse.json({ ok: true, message: 'Request received — we will reply via email shortly.' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, message: 'Failed to process request' }, { status: 500 })
  }
}
