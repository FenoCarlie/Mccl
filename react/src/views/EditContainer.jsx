import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../context/ContextProvider.jsx';

export default function EditContainer() {
  const navigate = useNavigate();
  let { id_container } = useParams();
  
  const [container, setContainer] = useState({
    id_container: null,
    num_container: 'test',
    name_container: '',
    type: '',
    category: '',
    status: '',
    live: '',
    code_location_tp: '',
    tp_name: '',
    position: '',
    date_in: '',
    date_out: ''
  });

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    if (id_container) {
      setLoading(true);
      axios.get(`http://localhost:8081/container/${id_container}`)
        .then(({ data }) => {
          setLoading(false);
          setContainer(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, []);
  
  useEffect(() => {
    console.log(container); // Log the updated container value here
  }, [container]);

  const onSubmit = ev => {
    ev.preventDefault();
    if (container.id_container) {
      axios.put(`http://localhost:8081/container/${container.id_container}`, container)
        .then(() => {
          setNotification('Container was successfully updated');
          navigate('/container');
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <div>
      {container.id_container && <h1>Update container: {container.num_container}</h1>}
      {console.log(container.num_container)}
      <div className="card animated fadeInDown">
        {loading && (
          <div className="text-center">
            Loading...
          </div>
        )}
        {errors && (
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}
        {!loading && (
          <form onSubmit={onSubmit}>
            <input
              value={container.num_container}
              onChange={ev => setContainer({ ...container, num_container: ev.target.value })}
              placeholder="Number of container"
            />
            <input
              value={container.name_container}
              onChange={ev => setContainer({ ...container, name_container: ev.target.value })}
              placeholder="Name of container"
            />
            <input
              value={container.type}
              onChange={ev => setContainer({ ...container, type: ev.target.value })}
              placeholder="Type"
            />
            <input
              value={container.category}
              onChange={ev => setContainer({ ...container, category: ev.target.value })}
              placeholder="Category"
            />
            <input
              value={container.status}
              onChange={ev => setContainer({ ...container, status: ev.target.value })}
              placeholder="Status"
            />
            <input
              value={container.live}
              onChange={ev => setContainer({ ...container, live: ev.target.value })}
              placeholder="Live"
            />
            <input
              value={container.code_location_tp}
              onChange={ev => setContainer({ ...container, code_location_tp: ev.target.value })}
              placeholder="Code of location T.P"
            />
            <input
              value={container.tp_name}
              onChange={ev => setContainer({ ...container, tp_name: ev.target.value })}
              placeholder="Name of T.P"
            />
            <input
              value={container.position}
              onChange={ev => setContainer({ ...container, position: ev.target.value })}
              placeholder="Position"
            />
            <input
              type="date"
              value={container.date_in}
              onChange={ev => setContainer({ ...container, date_in: ev.target.value })}
              placeholder="Date In"
            />
            <input
              type="date"
              value={container.date_out}
              onChange={ev => setContainer({ ...container, date_out: ev.target.value })}
              placeholder="Date Out"
            />
            <button className="btn" type="submit">Save</button>
          </form>
        )}
      </div>
    </div>
  );
}
