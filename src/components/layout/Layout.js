import Style from './Layout.module.css';
import NavBar from './MainNavigation';

const Layout = ({ children }) =>
(
	<>
		<NavBar />
		<main className={Style.main}>
			{children}
		</main>
	</>

)

export default Layout
