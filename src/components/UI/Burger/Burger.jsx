import React, { useState } from 'react';
import s from './Burger.module.sass'

export default function Burger({ isActive, setActive }) {

	return (
		<div className={`${s.burger} ${isActive ? s.active : ''}`} onClick={() => setActive(!isActive)}>
			<div className={s.strip}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div >
	)
}