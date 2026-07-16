export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg/85 px-6 py-8 text-center backdrop-blur-sm">
      <p className="font-mono text-xs text-muted">
        {'Lê Đức Kiên · Front-end Portfolio · © '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
