// lib/auditLog.js
const auditLog = [];

export function addLog(entry) {
  auditLog.push({ ...entry, timestamp: new Date().toISOString() });
}

export function getAllLogs() {
  return auditLog;
}
