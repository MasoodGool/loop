import React, { useEffect, useState, useContext } from 'react';
import api from '../api'
import { Section, Heading, Field, Legend, List, ListItem, Label, Input, Button, Dash , Chart } from '../Components/FormStyles'
import { UserContext } from '../utils/UserContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Dashboard() {

    const [backendData, setBackendData] = useState([]);
    const [chartData, setChartData] =useState([]);

    const {user,setUser} = useContext(UserContext)
    const [weight, setWeight] = useState("");

    useEffect(()=>{
      const fetchData = async () =>{
        try {
          const {data: response} = await api.getUserById({username: user.user.username}, {headers: {'Authorization': `Bearer ${user.token}` }});
          setBackendData(response);
          setChartData(response.users.weight);
        } catch (error) {
          console.error(error.message);
        }
      }
      fetchData();
    },[weight])

      const trackWeight = async(e) => {
        e.preventDefault();
        try {
            await api.updateUserById({username: user.user.username, weight: weight}, {headers: {'Authorization': `Bearer ${user.token}` }});
            const {data: response} = await api.getUserById({username: user.user.username}, {headers: {'Authorization': `Bearer ${user.token}` }});
            setBackendData(response);
            setWeight("");
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return ( 
    <>
      <Section>
        <Dash>
          <Heading>Hi {user.user.username}!</Heading>    
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
              
        <Chart>
        <h2>Your weight History</h2>
        <LineChart width={1000} height={300} data={chartData}>
            <Line type="monotone" dataKey="weight" stroke="red" />
            <CartesianGrid stroke="black" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis dataKey="weight"/>
            <Tooltip />
        </LineChart>
        </Chart>
                
      </Section>
        </>
    )
};
export default Dashboard;