 
import { createFileRoute } from '@tanstack/react-router'
import Home from '../features/home/pages/Home'
import { getHomeProduct } from '../services/homeProduct'

export const Route = createFileRoute('/')({
    loader: async () => {
        const res = await getHomeProduct()
        return res.data
    },
    component: Home,
})


