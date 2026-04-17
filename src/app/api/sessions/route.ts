import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

function dbConfigured(): boolean {
  return !!(process.env.POSTGRES_URL || process.env.DATABASE_URL);
}

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id VARCHAR(64) PRIMARY KEY,
      practitioner_id VARCHAR(64) NOT NULL,
      practitioner_name VARCHAR(128) NOT NULL,
      scenario_id VARCHAR(128) NOT NULL,
      scenario_title VARCHAR(256) NOT NULL,
      start_time TIMESTAMPTZ NOT NULL,
      end_time TIMESTAMPTZ NOT NULL,
      duration_seconds INTEGER NOT NULL,
      score_overall INTEGER NOT NULL,
      score_empathy INTEGER DEFAULT 0,
      score_questioning INTEGER DEFAULT 0,
      score_intervention INTEGER DEFAULT 0,
      score_structure INTEGER DEFAULT 0,
      score_ethics INTEGER DEFAULT 0,
      techniques_used TEXT DEFAULT '[]',
      completed BOOLEAN DEFAULT true,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

// 学生提交练习记录
export async function POST(request: NextRequest) {
  if (!dbConfigured()) {
    return NextResponse.json({ error: '数据库未配置' }, { status: 200 });
  }

  try {
    await ensureTable();
    const body = await request.json();

    await sql`
      INSERT INTO sessions (
        id, practitioner_id, practitioner_name, scenario_id, scenario_title,
        start_time, end_time, duration_seconds,
        score_overall, score_empathy, score_questioning,
        score_intervention, score_structure, score_ethics,
        techniques_used, completed
      ) VALUES (
        ${body.id},
        ${body.practitionerId},
        ${body.practitionerName},
        ${body.scenarioId},
        ${body.scenarioTitle},
        ${body.startTime},
        ${body.endTime},
        ${body.durationSeconds},
        ${body.score?.overall ?? 0},
        ${body.score?.empathy ?? 0},
        ${body.score?.questioning ?? 0},
        ${body.score?.intervention ?? 0},
        ${body.score?.structure ?? 0},
        ${body.score?.ethics ?? 0},
        ${JSON.stringify(body.score?.techniquesUsed ?? [])},
        ${body.completed ?? true}
      )
      ON CONFLICT (id) DO NOTHING
    `;

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

  if (!dbConfigured()) {
    return NextResponse.json(
      { error: '数据库未配置。请在 Vercel 项目中创建 Postgres 数据库并关联到项目。' },
      { status: 500 }
    );
  }

  try {
    await ensureTable();
    const result = await sql`SELECT * FROM sessions ORDER BY start_time DESC`;
    return NextResponse.json(result.rows);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to fetch sessions:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
