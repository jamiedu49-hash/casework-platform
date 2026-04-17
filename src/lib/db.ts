import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    let url = process.env.POSTGRES_URL || '';
    // 将 sslmode=require 改为 no-verify，跳过自签名证书验证
    url = url.replace(/sslmode=require/, 'sslmode=no-verify');
    if (!url.includes('sslmode=')) {
      url += (url.includes('?') ? '&' : '?') + 'sslmode=no-verify';
    }

    pool = new Pool({
      connectionString: url,
      max: 5,
    });
  }
  return pool;
}

export async function ensureTable() {
  const p = getPool();
  await p.query(`
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
  `);
}
