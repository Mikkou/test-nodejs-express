export default async function(context) {
  const token = localStorage.getItem('token')
  if (token) {
    const { status, data } = await context.$axios.post('/api/v1/login/verify', { token })
    if (status === 200 && data.success) {
      return true
    } else {
      context.redirect('/admin/login')
    }
  } else {
    context.redirect('/admin/login')
  }
}
