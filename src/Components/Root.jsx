import "styled-components";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable, { createTheme } from "react-data-table-component";
import React, {useState, useEffect} from "react";

const Button = ({id}) => <button className="btn btn-primary" type="button" onClick={ () => alert(id)}>Editar</button>;

export default function Root() {
  //1- Configurar los hooks 
    const [users, setUsers] = useState( [] )

  //2- Funcion para mostrar los datos con fetch
  // const URL = 'https://gorest.co.in/public/v2/users'
  const URL = 'https://reqres.in/api/users/'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data.data)
  }

  useEffect(() => {
    showData()
  }, [])

  //3- Configuramos las columns para Datatables

  const columns = [
  {
    name: 'ID',
    selector: 'ID',
    selector:row => row.id,
    center:true,
    sortable: true,
    type:"numeric"
  },
  {
    name: 'Email',
    selector: 'Email',
    sortable: true,
    selector:row => row.email,
    grow: 2
  },
  {
    name: 'Name',
    selector: 'Name',
    sortable: true,
    selector:row => row.first_name,
    style: {
              backgroundColor: 'rgba(63, 195, 128, 0.9)',
              color: 'white',
      		},
  },
  {
    		name: 'Acciones',
        selector: 'Acciones',
    		button: true,
    		cell: (row) => <Button id={row.id} />,
  },
  {
    		name: 'Poster Link',
    		button: true,
    		cell: row => (
  			<a href={`/contacts/` + row.id} rel="noopener noreferrer">
    				Show
    			</a>
    		),
  },
  // {
  //   		cell: () => <Icon style={{ fill: '#43a047' }} />,
  //   		width: '56px', // custom width for icon button
  //   		style: {
  //   			borderBottom: '1px solid #FFFFFF',
  //   			marginBottom: '-1px',
  //   		},
	// },
  ]

  //tema

  // createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('custom', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

// paginacion en español 
const paginacionOpciones={
  rowsPerpageText: 'Filas por Pagina',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}


//4- Mostramos la data en Datatable
return (
  <div className="table-responsive">
      <h1>Titulo Principal</h1>
      <DataTable 
        title="List Users"
        columns={columns}
        data={users}
        theme="custom"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        // selectableRows
      />



      {/* <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
              <Link to={`/contacts/2`}>Your Name</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />  
        </div> */}
    </div>
  );
}
