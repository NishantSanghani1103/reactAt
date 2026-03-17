import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/paramsparameter')({
  validateSearch: (search) => {
    return {
      page: Number(search.page) || 1,
      sort: search.sort || "name"
    }
  },
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const { page, sort } = Route.useSearch()
  return (
    <>
      <div>
        <h5>Hello "/paramsparameter"!</h5>
        <p>Page Is : {page}</p>
        <Link className='border' to={`/paramsparameter`} search={{ page: page + 1, sort: sort }}>Next Page</Link>
      </div>
    </>
  )
}
