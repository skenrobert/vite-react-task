import "styled-components";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable, { createTheme } from "react-data-table-component";
import React, { useState, useEffect, useContext } from "react";
import { AppContex } from "../../contex/AppContext";

import "../../../src/App.css"

import MainMenu from '../Shared/MainMenu'
// import FlashMessages from '../Shared/FlashMessages';
import TopHeader from '../Shared/TopHeader';
import BottomHeader from '../Shared/BottomHeader';

import { FcAddImage, FcAddRow, FcAcceptDatabase, FcServices, FcPlus, FcPrivacy, FcAutomatic, FcSupport, FcSearch, FcPortraitMode, FcReuse, FcCalendar, FcHighPriority, FcContacts, FcEmptyTrash, FcEngineering, FcFile, FcBookmark, FcEditImage,  } from "react-icons/fc";


const Button = ({ id }) => (
  <button className="btn btn-primary" type="button" onClick={() => alert(id)}>
    Editar
  </button>
);

export default function Personas() {
  //1- Configurar los hooks
  const [users, setUsers] = useState([]);
  const { url_backend } = useContext(AppContex);
  const navigate = useNavigate();

  //2- Funcion para mostrar los datos con fetch
  const URL = url_backend + "personas";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data)
    setUsers(data.data);
  };

  useEffect(() => {
    showData();
  }, []);

  //3- Configuramos las columns para Datatables

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      center: true,
      sortable: true,
      type: "numeric",
    },
    {
      name: "Email",
      sortable: true,
      selector: (row) => row.email,
      grow: 2,
    },
    {
      name: "Nombre",
      sortable: true,
      selector: (row) => row.nombres,
      style: {
        // backgroundColor: "rgba(63, 195, 128, 0.9)",
        // color: "white",
      },
    },
    {
      name: "Acciones",
      selector: "Acciones",
      button: true,
      grow: 3,  
      cell: (row) => <div className="text-center">
        <a href={`/personas/` + row.id} rel="noopener noreferrer">
            <FcSearch className="w-8 h-8 mb-0 p-0 float-left" />
        </a>
      <FcEmptyTrash className="w-8 h-8 mb-0 p-0 float-right" onClick={() => alert(row.id)} />
      <FcEditImage className="w-8 h-8 mb-0 p-0 float-right" onClick={() => alert(row.id)} />
      </div>,
      // cell: (row) => <FcSupport className="w-20 h-20 px-4 " />,
      // cell: (row) => <Button id={row.id} />  < FcAddImage  />,
    },
    {
      name: "Poster Link",
      button: true,
      cell: (row) => (
        <a href={`/personas/` + row.id} rel="noopener noreferrer">
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
  ];

  //tema

  // createTheme creates a new theme named solarized that overrides the build in dark theme
  createTheme(
    "custom",
    {
      text: {
        primary: "#FFFFFF",
        secondary: "#2aa198",
      },
      background: {
        default: "rgb(56, 48, 163)",
      },
      context: {
        background: "#000000",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      Header: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  // paginacion en español
  const paginacionOpciones = {
    rowsPerpageText: "Filas por Pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  //4- Mostramos la data en Datatable
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-56 p-12 overflow-y-auto bg-indigo-800 md:block" />
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">

              <div className="table-responsive">
                <DataTable
                  title="Lista de Personas"
                  columns={columns}
                  data={users}
                  theme="custom"
                  pagination
                  paginationComponentOptions={paginacionOpciones}
                  fixedHeader
                  fixedHeaderScrollHeight="600px"
                  // selectableRows
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
