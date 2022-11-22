import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">ZuX Coder</Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/courses">Courses</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );

}

export default NavBar;