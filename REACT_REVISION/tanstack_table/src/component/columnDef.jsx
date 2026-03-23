export const columnDef = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "NAME"
    },
    {
        accessorKey: "date_of_birth",
        header: "DOB",
        cell: (value) => {
            return value.getValue().split("T")[0]

        }
    },
]