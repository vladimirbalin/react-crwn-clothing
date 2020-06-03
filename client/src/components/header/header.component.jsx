import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const OptionLink = styled(Link)`
  padding: 10px 15px;
`;
const OptionDiv = styled.div`
  padding: 10px 15px;
`;
const Header = ({ currentUser, hidden }) => {
  const signOut = () => auth.signOut();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Crown />
      </LogoContainer>
      <Options>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={signOut}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/sign-in">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
