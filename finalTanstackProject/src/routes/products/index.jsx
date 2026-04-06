import { createFileRoute } from '@tanstack/react-router'
import ProductPage from '../../features/products/pages/ProductPage'

export const Route = createFileRoute('/products/')({
  component: ProductPage,
})

