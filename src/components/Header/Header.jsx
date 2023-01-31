import React from 'react';
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import { PlayMarketIcon, AppStoreIcon } from "../../assets/icons";
import logo from "../../assets/images/logo.png"

import "./Header.scss"

const Header = () => {
	return (
		<div className="Header">
			<img src={logo} alt="logo" />

			<HeaderLink />

			<div className="flex items-center justify-center">
				<select name="" id="">
					<option value="en">EN</option>
					<option value="ru">RU</option>
					<option value="uz">UZ</option>
				</select>

				<PlayMarketIcon />
				<AppStoreIcon />
			</div>

		</div>
	)
}

export default Header;