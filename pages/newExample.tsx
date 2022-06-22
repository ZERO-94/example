import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Typography } from "@mui/material";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'isRegistered', headerName: 'Register', width: 130, renderCell: ({row}) => <><Typography>{row.isRegistered ? "V" : null}</Typography></> },
    { field: 'action', headerName: 'Action', width: 130, renderCell: ({row}) => <Button onClick={() => {
        alert(row.id)}}>Register</Button> },
  ];

  //Note: the renderCell helps you to render what you like instead of the value-only 
  //In here I use the renderCell to render a Button instead of the string, the row variable is used to get the data of that row

  interface DataResponse {
    id: number,
    name: string,
    isRegistered: string,
    role: string
  }

  interface RowData {
    id: number,
    name: string,
    isRegistered: boolean,
    role: string
  }

const NewExamplePage = () => {

    const [data, setData] = useState<RowData[]>([]);

    const fetchData = async () => {
        try {
            //call API from BE
            const data : DataResponse[] = await (await fetch(`${window.location.origin}/fakeData.json`)).json();
            //mapping data to use
            const finalArray : RowData[] = data.map((item : DataResponse) => ({
                id: item.id,
                name: item.name,
                isRegistered: item.isRegistered == "true",
                role: item.role
            }));

            setData(finalArray);
        } catch (e) {
            alert("Problem");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <div style={{height: "80vh"}}>
    <h1>New page</h1>
    <DataGrid 
        rows={data}
        columns={columns}
        pageSize={5}
    />
    </div>
}

export default NewExamplePage;