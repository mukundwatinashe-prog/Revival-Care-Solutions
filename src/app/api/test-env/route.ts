import { NextResponse } from 'next/server';

// This is a temporary debug endpoint to check if the environment variable is set
// DELETE THIS FILE AFTER VERIFYING THE SETUP IS WORKING
export async function GET() {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  
  return NextResponse.json({
    hasKey: !!accessKey,
    keyLength: accessKey ? accessKey.length : 0,
    keyPreview: accessKey ? `${accessKey.substring(0, 8)}...` : 'NOT SET',
    message: accessKey 
      ? '✅ WEB3FORMS_ACCESS_KEY is configured!' 
      : '❌ WEB3FORMS_ACCESS_KEY is NOT configured',
    note: 'Delete this file after verifying setup'
  });
}
