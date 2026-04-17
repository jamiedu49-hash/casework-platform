import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  const envCheck = {
    POSTGRES_URL: !!process.env.POSTGRES_URL,
    POSTGRES_HOST: !!process.env.POSTGRES_HOST,
    POSTGRES_DATABASE: !!process.env.POSTGRES_DATABASE,
    POSTGRES_USER: !!process.env.POSTGRES_USER,
    DATABASE_URL: !!process.env.DATABASE_URL,
    TEACHER_PASSWORD: !!process.env.TEACHER_PASSWORD,
  };

  // 找到实际使用的连接字符串，只显示前30个字符
  const url = process.env.POSTGRES_URL || process.env.DATABASE_URL || '';
  const urlPreview = url ? url.substring(0, 30) + '...' : '(未设置)';

  let dbStatus = '未测试';
  let dbError = '';

  if (url) {
    try {
      await sql`SELECT 1 as ok`;
      dbStatus = '连接成功';
    } catch (e: unknown) {
      dbStatus = '连接失败';
      dbError = e instanceof Error ? e.message : String(e);
    }
  } else {
    dbStatus = '无连接字符串';
  }

  return NextResponse.json({
    envVars: envCheck,
    urlPreview,
    dbStatus,
    dbError: dbError || undefined,
  }, { status: 200 });
}
