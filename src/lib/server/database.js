
import postgres from 'postgres'

// see env variables in .env
// import {PGCONNECT} from '$env/dymaic/private';

const sql = postgres(process.env.PGCONNECT, {} )

export default sql;
