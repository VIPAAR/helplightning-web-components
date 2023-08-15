export function hasPermission (user, permission) {
  return !!user.permissions && user.permissions.includes(permission)
}

export function hasTokenPermission (user, permission) {
  return !!user.token_permissions && user.token_permissions.includes(permission)
}

export function hasAllPermissions (user, permissions) {
  if (!user.permissions) { return false }

  const values = user.permissions.map((p) => hasPermission(user, p))
  return !values.includes(false)
}
