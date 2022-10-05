import "./aircrafts.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCirclePlus,
  faArrowLeft
  // faPen,
  // faTrash,
} from "@fortawesome/free-solid-svg-icons";

// import tentativa CRUD

import FormDialog from "./dialog/dialog";
import React from "react";

export const Aircraft = (props) => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  // Tentativa de CRUD

  const [open, setOpen] = React.useState(false);

  const handleClickAircraft = () => {
    setOpen(true);
  }


  return (
    <div className="aircraftComponent">
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        listAircraft={props.listAircraft}
        setListAircraft={props.setListAircraft}
        id={props.id}
      />
      <button type="button" className="aircraftBackButton" onClick={handleVoltar}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1 className="aircraftTitle">Aircraft Models</h1>

      <div className="inputComponent">
        <input
          className="inputAircraft"
          type="search"
          placeholder="Aircraft Name"
        />
        <button className="aircraftInputButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="aircraftInputButton">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>

      <div className="aircraft--container" onClick={() => handleClickAircraft()}>

        <h1 className="aircraft--title">{props.name}</h1>



        {/* <tr>
          <th className="firstTh">Aircraft Name</th>
          <th className="alinhamento">Edit</th>
          <th className="alinhamento">Delete</th>
        </tr>
        <tr>
          <td>Default Model</td>
          <td className="alinhamento">
            <button className="tableButton">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </td>
          <td className="alinhamento">
            <button className="tableButton">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
        <tr>
          <td>Default Model</td>
          <td className="alinhamento">
            <button className="tableButton">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </td>
          <td className="alinhamento">
            <button className="tableButton">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr> */}
      </div>
    </div>
  );
};
