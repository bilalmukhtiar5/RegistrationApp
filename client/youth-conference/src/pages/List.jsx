import React, {useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const List = () => {
  const [data,setData] = useState([])
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/registration")
    setData(response.data.registrations)
  }
  const handleUpdate = () =>{

  }
  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/registration/${id}`)
    if(response.data.success){
      toast.success(response.data.message)
      fetchData()
    } 
    }
  
  useEffect(() => {
    fetchData();
  },[])
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
      },
    },
    {
      name: 'Contact',
      selector: row => row.contact,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'Address',
      selector: row => row.city,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'Education',
      selector: row => row.education,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'Actions',
      cell: row => (
        <div className='d-flex justify-content-center'>
          <Link
            className='btn btn-primary btn-sm me-2'
            style={{
              backgroundColor: '#007bff',
              borderColor: '#007bff',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '4px',
            }}
            to={`/registration/${row._id}`}
            >
            U
          </Link>
          <button
            className='btn btn-danger btn-sm'
            style={{
              backgroundColor: '#dc3545',
              borderColor: '#dc3545',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '4px',
            }}
            onClick={() => handleDelete(row._id)}
          >
            D
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];


  return (
    <DataTable
			columns={columns}
			data={data}
		/>
  )
}

export default List