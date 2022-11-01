import useSWR from 'swr';
import Image from 'next/image';
import {Spinner} from '@components/Spinner';
import {Button, Input} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {FunctionComponent, useEffect} from 'react';
import {useRouter} from 'next/router';

export const LoginPage: FunctionComponent = () => {
	return (
		<>
			<div className="container">
				<div className="header">
					<div className="">
						<img src="/assets/zapata.png" alt="logo-zapata" className="logo-img" />
					</div>
					<br />
				</div>
				<div className="field-container">
					<Input type="text" className="center-inputs" placeholder="Usuario"></Input>
					<br />
					<Input type="text" className="center-inputs" placeholder="Contraseña"></Input>
					<br />
					<Button className="center-inputs" variant="contained">
						Iniciar sesión
					</Button>
				</div>
			</div>
			<style jsx>{`
				.container {
					margin-top: 20%;
					display: block;
					margin-left: auto;
					margin-right: auto;
					display: flex;
					flex-wrap: wrap;
				}
				.logo-img {
					display: block;
					margin-left: auto;
					margin-right: auto;
					width: 50%;
				}
				.field-container {
					margin-left: auto;
					margin-right: auto;
					width: 40%;
					display: flex;
					flex-direction: column;
				}
				h2 {
					font-style: normal;
					font-weight: 300;
					font-size: 40px;
					line-height: 48px;
					margin-bottom: 3.2rem;
					color: var(--gray5);
				}
			`}</style>
		</>
	);
};
