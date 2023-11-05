import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
// import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {

    // const navigation = useNavigation();
    // console.log(navigation);
    // const isLoadingData = navigation.state === 'loading'
    // console.log(isLoadingData);
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7">
                <div>
                    <h1 className="text-xl font-bold text-orange-400">Amazon</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-lime-400 rounded-sm" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-lime-400 rounded-sm" : ""
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-lime-400 rounded-sm" : ""
                            }
                        >
                            DashBoard
                        </NavLink>

                    </ul>
                </nav>
            </section>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            {/* making a condition for loading a spinner */}
            {/* {
                isLoadingData ?
                    <Spinner></Spinner> :
                    <div className="min-h-screen">
                        <Outlet></Outlet>
                    </div>
            } */}

            <Footer></Footer>


        </div>
    );
};

export default MainLayout;