import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

// --- page ---
export default function Home() {
	// --- markup ---
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<nav className='flex flex-col text-center'>
				<Link href='/app'>
					<a>Dashboard</a>
				</Link>
				<Link href='/signup'>
					<a>Sign Up</a>
				</Link>
				<Link href='/login'>
					<a>Log in</a>
				</Link>
			</nav>
		</div>
	);
}

// --- styled components ---
const Nav = styled.nav`
	display: flex;
`;
