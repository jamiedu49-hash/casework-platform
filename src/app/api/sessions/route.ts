import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

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
  } catch (error) {
    console.error('Failed to save session:', error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}

// 教师查看所有记录（需要密码）
export async function GET(request: NextRequest) {
  const key = request.headers.get('x-teacher-key');
  if (!key || key !== process.env.TEACHER_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await ensureTable();
    const result = await sql`SELECT * FROM sessions ORDER BY start_time DESC`;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to fetch sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
