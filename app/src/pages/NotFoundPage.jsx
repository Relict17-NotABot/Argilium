import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-6xl font-bold text-primary">ERROR 404</h1>
      <p className="text-xl text-muted-foreground">Página no encontrada</p>
      <Link to="/" className="text-primary hover:underline">
        Volver al inicio
      </Link>
    </div>
  )
}