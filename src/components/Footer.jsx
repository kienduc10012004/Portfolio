export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-6 py-8 text-center">
      <p className="font-mono text-xs text-muted">
        {'Lê Đức Kiên · Front-end Portfolio · © '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
