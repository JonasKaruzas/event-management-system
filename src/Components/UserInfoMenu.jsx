import { useContext, useState } from "react"
import styled, {css} from "styled-components"
import { LoginContext } from "./LoginState";
import admin from "../Assets/Images/account-cog.svg";
import editor from "../Assets/Images/account-edit.svg";
import viewer from "../Assets/Images/account-eye.svg";
import { AttendeeListContext } from "./AttendeeListState";


const Container = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  height: 40px;
  width: 40px;
  background-color: #497174;
  color: white;
  border-radius: 25px;
  box-shadow: 0px 5px 10px 0px #a4a4a480;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.4s;
  z-index: 100;
  overflow: none;
  
  ${props => props.showMenu && css`
    height: 100px;
    width: 150px;
    border-radius: 15px;
  ` }
`
  
const ImgIcon = styled.img`
filter: invert(100%);
  width: 20px;
  height: 20px;

` 
const Button = styled.button`
  padding: 6px 12px;
  background-color: #EB6440;
  border: none;
  border-radius: 5px;
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 600;
  cursor: pointer; 

  :hover {
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px 0px #a4a4a430;
  }
  
  :active {
    transform: translateY(0px);
    box-shadow: none;
  }
`


export function UserInfoMenu() {
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
  const [showMenu, setShowMenu] = useState(false);
  const {setSearchInput, setSortInput} = useContext(AttendeeListContext);

  function toggleMenu(e) {
    setShowMenu(prev => !prev)
  }

  function getIcon() {
    if (loggedInUser.type === 'admin') {
      return admin
    }
    if (loggedInUser.type === 'editor') {
      return editor
    }
    if (loggedInUser.type === 'viewer') {
      return viewer
    }
  }

  function logOut() {
    setLoggedInUser({});
    setSearchInput('');
    setSortInput('');
  }

  return (
    <Container onClick={toggleMenu} showMenu={showMenu}>
        <div>
          <ImgIcon src={getIcon()} /> 
        </div>
        {showMenu && 
          <>
            <div>{loggedInUser.username}</div>
            <Button onClick={logOut}>Logout</Button>
          </> }
    </Container>
  )

} 