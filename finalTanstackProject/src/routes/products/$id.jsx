import { createFileRoute } from '@tanstack/react-router'
import ProductDetails from '../../features/products/pages/ProductDetails'

export const Route = createFileRoute('/products/$id')({
  component: ProductDetails,
})

