import { NextRequest, NextResponse } from 'next/server';
import { getPool, ensureTable } from '@/lib/db';

// 学生提交练习记录
export async function POST(request: NextRequest) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: '数据库未配置' }, { status: 200 });
  }

  try {
    await ensureTable();
    const body = await request.json();
    const pool = getPool();

    await pool.query(
      `INSERT INTO sessions (
        id, practitioner_id, practitioner_name, scenario_id, scenario_title,
        start_time, end_time, duration_seconds,
        score_overall, score_empathy, score_questioning,
        score_intervention, score_structure, score_ethics,
        techniques_used, completed
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
      ON CONFLICT (id) DO NOTHING`,
      [
        body.id,
        body.practitionerId,
        body.practitionerName,
        body.scenarioId,
        body.scenarioTitle,
        body.startTime,
        body.endTime,
        body.durationSeconds,
        body.score?.overall ?? 0,
        body.score?.empathy ?? 0,
        body.score?.questioning ?? 0,
        body.score?.intervention ?? 0,
        body.score?.structure ?? 0,
        body.score?.ethics ?? 0,
        JSON.stringify(body.score?.techniquesUsed ?? []),
        body.completed ?? true,
      ]
    );

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to save session:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// 教师查看所有记录（需要密码）
export async function GET(request: NextRequest) {
  const key = request.headers.get('x-teacher-key');
  if (!key || key !== process.env.TEACHER_PASSWORD) {
    return NextResponse.json({ error: '密码错误' }, { status: 401 });
  }

  if (!process.env.POSTGRES_URL) {
    return NextResponse.json(
      { error: '数据库未配置。请设置 POSTGRES_URL 环境变量。' },
      { status: 500 }
    );
  }

  try {
    await ensureTable();
    const pool = getPool();
    const result = await pool.query('SELECT * FROM sessions ORDER BY start_time DESC');
    return NextResponse.json(result.rows);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to fetch sessions:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
