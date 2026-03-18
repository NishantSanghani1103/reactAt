export const coulmnDef = [
    {
        accessorKey: "id",
        header: "ID",
        enableColumnFilter: false,
    
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorFn: (row) => `${row.name} ${row.age}`,
        header: "Name Age",
        enableColumnFilter: false
    },
    {
        accessorKey: "date_of_birth",
        header: "DOB",
        cell: (date) => {
            return date.getValue().split("T")[0]
        },
        enableColumnFilter: false
    }

]


export const coulmnDefRowSelection = [
    {
        id: "select",
        header: ({ table }) => {
            // console.log(table.getIsAllRowsSelected())
            return (
                <input
                    type="checkbox"
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            )
        },
        cell: ({ row }) => {
            // console.log(row.getIsSelected())
            return (
                <input
                    type="checkbox"
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                />
            )
        },
    },
    {
        accessorKey: "id",
        header: "ID",
        enableColumnFilter: false
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorFn: (row) => `${row.name} ${row.age}`,
        header: "Name Age",
        enableColumnFilter: false
    },
    {
        accessorKey: "date_of_birth",
        header: "DOB",
        cell: (date) => {
            return date.getValue().split("T")[0]
        },
        enableColumnFilter: false
    }

]

export const coulmnDefDefaultFilter = [
    {
        accessorKey: "id",
        header: "ID",
        filterFn: "equalsString"
    },
    {
        accessorKey: "name",
        header: "Name",
        filterFn: "equalsString"
    },
    {
        accessorKey: "email",
        header: "Email",
        filterFn: "equalsString"
    },
    {
        accessorKey: "phone",
        header: "Phone",
        filterFn: "equalsString"
    },
    {
        accessorFn: (row) => `${row.name} ${row.age}`,
        header: "Name Age",
        enableColumnFilter: false
    },
    {
        accessorKey: "date_of_birth",
        header: "DOB",
        cell: (date) => {
            return date.getValue().split("T")[0]
        },
        enableColumnFilter: false
    }

]