/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/product/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const {id} = Route.useParams();
  console.log(id);
  
  return (
    <>
      <div>Hello "/product/{id}"!</div>
    </>
  );
}
