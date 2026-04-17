import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET() {
  const envCheck = {
    POSTGRES_URL: !!process.env.POSTGRES_URL,
    POSTGRES_HOST: !!process.env.POSTGRES_HOST,
    TEACHER_PASSWORD: !!process.env.TEACHER_PASSWORD,
  };

  const url = process.env.POSTGRES_URL || '';
  const urlPreview = url ? url.substring(0, 30) + '...' : '(未设置)';

  let dbStatus = '未测试';
  let dbError = '';

  if (url) {
    try {
      const pool = getPool();
      await pool.query('SELECT 1 as ok');
      dbStatus = '连接成功';
    } catch (e: unknown) {
      dbStatus = '连接失败';
      dbError = e instanceof Error ? e.message : String(e);
    }
  } else {
    dbStatus = '无连接字符串';
  }

  return NextResponse.json({ envVars: envCheck, urlPreview, dbStatus, dbError: dbError || undefined });
}
