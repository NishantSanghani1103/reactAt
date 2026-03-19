

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


// function filterFunction(row, columnId, filterValue) {       // used for filter on single column
//     const value = row.getValue(columnId);
//     if (value.includes(filterValue)) {
//         return true
//     }
//     return false

// }


function filterMultipleCoulumn(row, columnName, filterValue) {
    const name = row.original.name
    const email = row.original.email
    console.log(name);
    console.log(row.original);

    // console.log(email);
    console.log(filterValue);
    if (columnName == "name") {
        const ans = row.original.name.includes(filterValue)
        return ans ? true : false
    }
    if (columnName == "email") {
        const ans = row.original.email.includes(filterValue)
        return ans ? true : false
    }
}
filterMultipleCoulumn.autoRemove = (value) => !value
export const columnDefFilterCondition = [
    {
        accessorKey: "id",
        header: "ID",
        enableColumnFilter: false,

    },
    {
        accessorKey: "name",
        header: "Name",
        // filterFn: filterFunction //  used for filter on single column.
        filterFn: filterMultipleCoulumn
    },
    {
        accessorKey: "email",
        header: "Email",
        filterFn: filterMultipleCoulumn
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
        cell: ({ getValue }) => {
            const value = getValue()
            const ans = new Date(value)
            return ans.toLocaleDateString()
        },
        enableColumnFilter: false
    }

]



export const coulmnDefMultipleFilterCondition = [
    {
        accessorKey: "id",
        header: "ID",
        enableColumnFilter: false,

    },
    {
        accessorKey: "name",
        header: "Name",
        filterFn:"arrIncludesSome"
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