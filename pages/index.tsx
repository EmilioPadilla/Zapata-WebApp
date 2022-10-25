/**
 * Corresponds to home page -> {{url}}/
 */
import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import {Spinner} from '@components/Spinner';
import {LoginPage} from '@components/Login';

const Login: NextPage = () => {
	const router = useRouter();

	// const {data: programs} = useSWR('programs', () => ProgramService.getPrograms())

	// if (true) return <Spinner />

	return (
		<>
			<Head>
				<title>Iniciar sesión</title>
			</Head>
			<main>
				<LoginPage />
			</main>
		</>
	);
};

export default Login;
