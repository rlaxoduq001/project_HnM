import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate  } from 'react-router-dom'

export const Navbar = ({authenticate,setAuthenticate}) => {

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("asd", authenticate);
    // },[authenticate])

    const goToPage = (page) => {
        if(page === "login")navigate('/Login');
        else if (page === "home") navigate('/', { replace: true });
        else return;
    }

    const logout = () => {
        setAuthenticate(false)
    }

    const search = (e) => {
        if(e.key === "Enter") {
            let keyword = e.target.value;
            console.log(keyword);
            navigate(`/?q=${keyword}`);
        }
    }

    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    {authenticate ? 
                        <div onClick={()=>logout("logout")}>로그아웃</div> : 
                        <div onClick={()=>goToPage("login")}>로그인</div>
                    }
                    
                </div>
            </div>
            <div className='nav-section' onClick={()=>goToPage("home")}>
                <img 
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtf2UszE2ovHcqtNSBVtUjcpyDeUvmPwmWEg&usqp=CAU"
                    alt='logo'
                />
            </div>
            <div>
                <div className="menu-area">
                    <div></div>
                    <ul className='menu-list'>
                        {menuList.map((menu,idx) => (
                            <li key={idx}>{menu}</li>
                        ))}
                    </ul>
                    <div className='search-input-container'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" 
                            onKeyPress={(e)=>search(e)}
                            className='search-input' placeholder="제품검색"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
