export const configKeys = {
  settings: (projectRef: string | undefined) => ['projects', projectRef, 'settings'] as const,
  api: (projectRef: string | undefined) => ['projects', projectRef, 'settings', 'api'] as const,
  postgrest: (projectRef: string | undefined) => ['projects', projectRef, 'postgrest'] as const,
  jwtSecretUpdatingStatus: (projectRef: string | undefined) =>
    ['projects', projectRef, 'jwt-secret-updating-status'] as const,
}
