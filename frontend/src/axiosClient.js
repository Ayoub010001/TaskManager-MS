import axios from 'axios';

const axiosProjects = axios.create({
    baseURL: `http://localhost:9999/PROJECT-SERVICE/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const axiosTasks = axios.create({
    baseURL: `http://localhost:9999/TASK-SERVICE/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export { axiosProjects, axiosTasks}