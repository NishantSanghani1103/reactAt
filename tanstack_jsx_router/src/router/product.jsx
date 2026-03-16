import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/product')({
  validateSearch: (search) => {
    return {
      page: Number(search.page) || 1,
      sort: search.sort || "name"
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { page, sort } = Route.useSearch()

  return (
    <>
      <div>
        Hello "/product Query"!
        <p>Page: {page}</p>
        <p>Sort: {sort}</p>
        <h3>Change Query Parameter</h3>
        <Link to={'/product'} search={{ page: page + 1, sort: sort }}>Next Page</Link>
      </div>
    </>
  )
}
