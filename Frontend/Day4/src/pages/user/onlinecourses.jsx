import Card1 from "../../components/Card1";
import PersistentDrawerLeft from '../../components/Drawer';
import Navbar from "../../components/Nav";
import '../../assets/css/home.css';
import '../../assets/css/onlinecourses.css'
import Card2 from "../../components/Card2";
import Card3 from "../../components/Card3";
export default function OCourses(){
    return(
        <div>
            <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }}/>
            <div className="oc1" style={{width:'33.33%',float:'left'}}> 
            <Card1/>
            </div>
            <div className="oc2" style={{width:'33.33%',float:'left'}}>
            <Card2/>
            </div>
            <div className="oc3" style={{width:'33.33%',float:'left'}}>
            <Card3/>
            </div>
        </div>
    );
}