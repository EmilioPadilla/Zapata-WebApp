/**
 * Will handle all routes that are not found, and redirect them to error page
 */
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Custom404Page: NextPage = () => {
	useEffect(() => {}, []);
	return <>Replace for a friendlier 404 page</>;
};

export default Custom404Page;
