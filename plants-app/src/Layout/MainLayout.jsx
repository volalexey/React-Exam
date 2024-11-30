import {NavLink, Outlet} from "react-router-dom"
const MainLayout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="py-3">
                <div className="container">
                    <nav>
                        <NavLink to="/" className="btn">
                            Plants List
                        </NavLink>
                        <NavLink to="/add" className="btn">
                            Add Plant
                        </NavLink>
                    </nav>
                </div>
            </header>
            <main className="flex-grow-1">
                <Outlet/>
            </main>
            <footer className="text-center py-3">
                Creator: Alexey Voloshyn. CSS added by Bootstrap
            </footer>
        </div>
    )
}

export default MainLayout;