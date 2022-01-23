import React from 'react'

function Sidebar() {
  return <>
    <div>
     <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

      
            <hr class="sidebar-divider my-0"/>

          
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

     
            <hr class="sidebar-divider"/>


            <div class="sidebar-heading">
                Interface
            </div>


            <li class="nav-item">
               <a className="nav-link" href='a'>
                   <span> Add Students</span>
               </a>
            </li>


            <li class="nav-item">
                <a class="nav-link collapsed"
                 href="#" data-toggle="collapse"
                  >
                   
                    <span>All Students</span>
                </a>
               
            </li>


            <hr class="sidebar-divider"/>

           

        </ul>
    </div>
  </>
}

export default Sidebar
