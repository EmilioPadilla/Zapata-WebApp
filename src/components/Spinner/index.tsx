import {FC} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner: FC = () => {
	return (
		<main className="loading-container">
			<CircularProgress />
			<style jsx>{`
				.loading-container {
					align-items: center;
					display: flex;
					height: 100vh;
					justify-content: center;
					width: 100%;
				}
			`}</style>
		</main>
	);
};
