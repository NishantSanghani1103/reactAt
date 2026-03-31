export const userColumns = (onDelete) => [
    {
        accessorKey: "id",
        cell: ({ row }) => {
            console.log(row);
            return (
                <p>{row.index + 1}</p>
            )
        },
        enableSorting: false
    },
    {
        accessorKey: "fullName",
        header: "Full Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone",
        enableSorting: false
    },
    {
        accessorKey: "gender",
        header: "Gender",
        enableSorting: false
    },
    {
        accessorKey: "city",
        header: "City",
        enableSorting: false
    },
    {
        header: "Action",
        cell: ({ row }) => (
            <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(row.index)}
            >
                Delete
            </button>
        ),
    },
];