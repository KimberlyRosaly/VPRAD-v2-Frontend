// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import AddressFooter from '../components/AddressFooter'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// H O M E   C O N T A I N E R   C O M P O N E N T
export default function Home() {  


    return (
        
            <div className='home-container'>
                <hr />
                <h1>VEHICLE PERMITS</h1>
                <h2>REGISTRATION & DATABASE</h2>
                <hr />

                <Link to={'/access-portal/login'}>
                    <button>
                        LOG IN
                    </button>
                </Link>

                <Link to={'/access-portal/signup'}>
                    <button>
                        SIGN UP
                    </button>
                </Link>
                <hr />

                <AddressFooter />
                
            </div>
        
    )
        

    
    }