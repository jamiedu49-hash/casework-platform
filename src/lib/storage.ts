import type { PractitionerProfile, SessionRecord } from '@/data/types';

const PRACTITIONER_KEY = 'cwp_practitioner';
const SESSIONS_KEY = 'cwp_sessions';

function isClient(): boolean {
  return typeof window !== 'undefined';
}

// ─── Practitioner ──────────────────────────────────────

export function getPractitioner(): PractitionerProfile | null {
  if (!isClient()) return null;
  try {
    const raw = localStorage.getItem(PRACTITIONER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function savePractitioner(profile: PractitionerProfile): void {
  if (!isClient()) return;
  localStorage.setItem(PRACTITIONER_KEY, JSON.stringify(profile));
}

export function clearPractitioner(): void {
  if (!isClient()) return;
  localStorage.removeItem(PRACTITIONER_KEY);
}

// ─── Sessions ──────────────────────────────────────────

export function getSessions(): SessionRecord[] {
  if (!isClient()) return [];
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getSessionsByPractitioner(practitionerId: string): SessionRecord[] {
  return getSessions().filter((s) => s.practitionerId === practitionerId);
}

export function saveSession(session: SessionRecord): void {
  if (!isClient()) return;
  const sessions = getSessions();
  sessions.push(session);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}秒`;
  return s > 0 ? `${m}分${s}秒` : `${m}分钟`;
}
