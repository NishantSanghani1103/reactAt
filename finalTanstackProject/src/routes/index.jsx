import { createFileRoute } from '@tanstack/react-router'
import Home from '../features/home/pages/Home'
import { getHomeProduct } from '../features/home/services/HomeProductApi'

export const Route = createFileRoute('/')({
  loader: async () => {
    try {
      const res = await getHomeProduct()
      // console.log(res.data);
      return res.data
    } catch (error) {
      throw new Error(error.message)
    }
  },
  component: Home,
})

