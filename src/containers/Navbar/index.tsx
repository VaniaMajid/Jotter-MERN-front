import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";
import { StyledHeader } from "Containers/Navbar/navbar.style";
import logo from "Assets/logo.png";
import ButtonComponent from "Components/BtnComponent";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleLogout = () => {
    setConfirmLoading(true);
    localStorage.setItem('token', '');
    navigate("/login");
  };

  return (
    <StyledHeader>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} style={{ width: "100px", marginLeft: "10px" }} />
      </div>
      <ButtonComponent name="Logout" click={showModal} width="100px" bgClr="#daa0f3" />
      <Modal
        title="Logout Confirmation"
        centered
        open={open}
        onOk={handleLogout}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </StyledHeader>
  );
}

export default Navbar;
