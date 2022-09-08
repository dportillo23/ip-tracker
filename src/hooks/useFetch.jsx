import { useState, useEffect } from "react";
import API from "../service/APIservice";

export default function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData(ip = null) {
            setLoading(true);
            setError();
            const data = ip ? await API.getIpLocation() : await API.getLocation();
            setData(data);
            setLoading(false);
            
        }

        try {
            fetchData()
        } catch (error) {
            setError(error);
        }

    }, [])
return [data, loading, error]
};