import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import MenuItems from '../UI/MenuItems/MenuItems';
import s from './Nav.module.sass'
import logolink from '../Media/logo.png'
import Burger from '../UI/Burger/Burger';
export default function Nav() {
	const [isActive, setActive] = useState(false);
	return (
		<nav >
			<div className={s.logo}>
				<a href="#"><img src={logolink} alt="logo" /></a>
			</div>
			<ul className={`${s.navigation} ${isActive ? s.active : ''}`}>
				<MenuItems>О нас</MenuItems>
				<MenuItems>Услуги</MenuItems>
				<MenuItems>Аренда</MenuItems>
			</ul>
			<Button>Связаться</Button>
			<Burger isActive={isActive} setActive={setActive} />
		</nav>
	)
}
