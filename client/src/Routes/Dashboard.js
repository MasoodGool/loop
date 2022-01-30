import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import api from '../api'
import { Section, Form, Heading, Field, Legend, List, ListItem, Label, Input, Button, Dash  } from '../Components/FormStyles'
import { UserContext } from '../utils/UserContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from "react-router-dom";


function Dashboard() {

  const [loading, setLoading] = useState(true);
    const [backendData, setBackendData] = useState([]);
    const data = [{name: 'Page A', uv: 400, pv: 500, amt: 250},{name: 'Page B', uv: 500, pv: 600, amt: 350},{name: 'Page C', uv: 320, pv: 465, amt: 478}];

    const {user,setUser} = useContext(UserContext)
    const [weight, setWeight] = useState("");

    useEffect(()=>{
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await api.getUserById({username: user.user.username}, {headers: {'Authorization': `Bearer ${user.token}` }});
            setBackendData(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
        fetchData();
      },[])

      const trackWeight = async(e) => {
        e.preventDefault();
        try {
            await api.updateUserById({username: user.user.username, weight: weight}, {headers: {'Authorization': `Bearer ${user.token}` }});
            const {data: response} = await api.getUserById({username: user.user.username}, {headers: {'Authorization': `Bearer ${user.token}` }});
            setBackendData(response);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return ( 
        <>





            <Section>
            <Dash>
            <Heading>Dashboard</Heading> 
            <Heading>{user.user.username}</Heading>
    
    <Field>
      <Legend>Record your weight</Legend>
      <List>
        <ListItem>
          <Label>weight:</Label>
          <Input type="text" value={weight} onChange={e => setWeight(e.target.value)} ></Input>
        </ListItem>
      </List>
    </Field>

    <Button onClick={trackWeight}>Record</Button>
  </Dash>
                
                <div>
                        {loading && <div>Loading</div>}
                    {!loading && (
                    <div>
                        <h2>Doing stuff with data</h2>
                        {backendData.users.weight.map((weight,i) => (<p key={i}>{weight}</p>))}
                    </div>
                    )}
                </div>
                
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                
            </Section><Link to="/" className="btn btn-primary" onClick={()=> setUser(null)}>Logout</Link>
        </>
    )
};
export default Dashboard;