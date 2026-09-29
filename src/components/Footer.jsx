function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Footer.
        </p>
      </div>
    </footer>
  )
}

export default Footer