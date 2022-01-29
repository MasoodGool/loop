import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import api from '../api'
import { Section, Form, Heading, Field, Legend, List, ListItem, Label, Input, Button  } from '../Components/FormStyles'
import { UserContext } from '../utils/UserContext';

function Dashboard() {

    const [loading, setLoading] = useState(true);
    const [backendData, setBackendData] = useState([]);


    const {user,setUser} = useContext(UserContext)

    useEffect(()=>{
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await api.getUserById("Ronaldo");
            setBackendData(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
        fetchData();
      },[])
    
    return ( 
        <>
            <Section>
                <Heading>
                    Dashboard
                </Heading>
                
                <pre>{JSON.stringify(user,null,2)}</pre>
                <div>
                        {loading && <div>Loading</div>}
                    {!loading && (
                    <div>
                        <h2>Doing stuff with data</h2>
                        {backendData.users.weight.map((weight,i) => (<p key={i}>{weight}</p>))}
                    </div>
                    )}
                </div>
                
                
            </Section>
        </>
    )
};
export default Dashboard;