import React, { useEffect, useState } from 'react';
import api from '../api'

function Dashboard() {

    const [loading, setLoading] = useState(true);
    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {


        const fetchData = async() => {
            setLoading(true);
            try {
                const { data: response } = await api.getUserById({
                    "username": "Ronaldo"
                });
                setBackendData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();



    }, [])


    return ( < div > {
                loading && < div > Loading < /div>} {!loading && ( <
                div >
                <
                h2 > Doing stuff with data < /h2> {
                backendData.users.map((user, i) => ( < p key = { i } > { user.username } < /p>))} < /
                        div >
                    )
                } <
                /div>);
            }

            export default Dashboard;