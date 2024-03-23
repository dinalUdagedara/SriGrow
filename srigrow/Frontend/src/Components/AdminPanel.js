import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
// import '../styles/AdminPanel.css'; // Import your CSS file
import '../Containers/StyleforAdmin.css'
import AddNewPlant from './AddNewPlant';
import AddtoMArket from './AddtoMarket'
import AddNews from './AddNews';
import AdminRightPanel from './AdminRightPanel'
import Home from '../Containers/MainPage'

export default function AdminPanel() {

    const [showAdminPanel,setShowAdminPanel] = useState(true)
    const toggleAdmin = () =>{
        setAddPlant(false);
        setshowAddtoMarket(false)
        setShowAddNews(false)
        setShowAdminPanel(true)
    }
    const [showAddPlant,setAddPlant] = useState(false)
    const toggleAddPlant = () =>{
        setAddPlant(true);
        setshowAddtoMarket(false)
        setShowAdminPanel(false)
        setShowAddNews(false)
    }


    const [showAddtoMarket,setshowAddtoMarket] = useState(false)
    const toggleAddtoMArket = () =>{
        setshowAddtoMarket(true);
        setAddPlant(false)
        setShowAdminPanel(false)
        setShowAddNews(false)
    }


    const [showAddNews,setShowAddNews] = useState(false)
    const toggleAddNews = () =>{
        setshowAddtoMarket(false);
        setAddPlant(false);
        setShowAddNews(true)
        setShowAdminPanel(false)
    }

    const [showSignOutt,setShowSignOut] = useState(false)
    const toggleSignOut = () =>{
        setshowAddtoMarket(false);
        setAddPlant(false)
        setShowAdminPanel(false)
        setShowAddNews(false)
    }

    
  return (
<div className="admin-panel-container">
    
      
        {/* <div className='MainBox'>
            <div className='leftBox'>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Add New Plant to the System</Link>
            </li>
            <li>
              <Link to="/users">Add Recent News</Link>
            </li>
            <li>
              <Link to="/posts">Update Market Place</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign-in</Link>
            </li>
          </ul>
        </nav>
        </div>

        <div className='rightBox'>

        </div >
 */}


        <div class="container">
      
      
     
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="admin-outline"></ion-icon>
                        </span>
                        <span class="title">Admin DashBoard</span>
                    </a>
                </li>

                <li className={showAddPlant ? "admin-box active":"admin-box"}>

                    <a href="#">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <Link to = '#' className='' onClick={toggleAddPlant}>
                        <span class="title">Add a New Plant</span>
                        </Link>
                    </a>
                </li>

                <li className={showAddtoMarket ? 'admin-box active':"admin-box"}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <Link to = '#' className='' onClick={toggleAddtoMArket}>
                        <span class="title">Update Market Store</span>
                        </Link>
                    </a>
                </li>

                <li className={showAddNews ? 'admin-box active':"admin-box"}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <Link to = '#' className='' onClick={toggleAddNews}>
                        <span class="title">Update Recent News</span>
                        </Link>
                    </a>
                </li>

                {/* <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span class="title">Help</span>
                    </a>
                </li> */}

                {/* <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Settings</span>
                    </a>
                </li> */}

                {/* <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span class="title">Password</span>
                    </a>
                </li> */}
 
                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <Link to="/" className="title">Sign Out</Link> 
                
                        
                    </a>
                </li> 
            </ul>
        </div>

       
    <div class="RightContent">

           

            
         {showAddPlant && (
            
            <AddNewPlant/>
         )
         }
         {showAddtoMarket && (
           
          <AddtoMArket/>
         )
            
         }
         {showAddNews && (
            <AddNews/>
         )

         }
         {
            showAdminPanel && (
                <AddNewPlant/>
            )
         }{
            showSignOutt && (
                <Home/>
            )
         }
        
            {/* <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="search">
                    <label>
                       
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div class="user">
                   
                </div>
            </div>

            
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">1,504</div>
                        <div class="cardName">Daily Views</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">80</div>
                        <div class="cardName">Sales</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">284</div>
                        <div class="cardName">Comments</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">$7,842</div>
                        <div class="cardName">Earning</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>

          
            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" class="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                  <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                               
                            </td>
                            <td>
                                <h4>David <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                               
                            </td>
                            <td>
                                <h4>Amit<span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                
                            </td>
                            <td>
                                <h4>David  <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                               
                            </td>
                            <td>
                                <h4>Amit <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                
                            </td>
                            <td>
                                <h4>David  <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                               
                            </td>
                            <td>
                                <h4>Amit <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                               
                            </td>
                            <td>
                                <h4>David <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                               
                            </td>
                            <td>
                                <h4>Amit  <span>India</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div> */}
        </div>
    </div>
</div>


  );
}
