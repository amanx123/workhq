type AuthEnv = {
  username: string;
  passwordHash: string;
  secret: string;
  sessionTtlSeconds: number;
};

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v;
}

function getPasswordHashFromEnv(): string {
  const direct = process.env.AUTH_PASSWORD_HASH?.trim();
  if (direct) return direct;

  // Some env loaders expand `$...` patterns, which can break bcrypt hashes and
  // result in an empty string. Allow a base64 fallback to avoid special chars.
  const b64 = process.env.AUTH_PASSWORD_HASH_B64?.trim();
  if (!b64) {
    throw new Error(
      "Missing required environment variable: AUTH_PASSWORD_HASH"
    );
  }

  let decoded = "";
  try {
    decoded = Buffer.from(b64, "base64").toString("utf8").trim();
  } catch {
    throw new Error("Invalid AUTH_PASSWORD_HASH_B64 (base64 decode failed)");
  }

  if (!decoded.startsWith("$2")) {
    throw new Error(
      "Invalid AUTH_PASSWORD_HASH_B64 (decoded value is not a bcrypt hash)"
    );
  }

  return decoded;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return n;
}

export function getAuthEnv(): AuthEnv {
  const sessionTtlSeconds = parsePositiveInt(
    process.env.AUTH_SESSION_TTL_SECONDS,
    60 * 60 * 24 * 7 // 7 days
  );

  return {
    username: requireEnv("AUTH_USERNAME").trim(),
    passwordHash: getPasswordHashFromEnv(),
    secret: requireEnv("AUTH_SECRET").trim(),
    sessionTtlSeconds,
  };
}
