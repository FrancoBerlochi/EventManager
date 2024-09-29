import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import './Dashboard.css';

const Dashboard = () => {
    return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <Sidebar/>
            <div className="content"></div>
        </div>
    </div>
    )
}

export default Dashboard;