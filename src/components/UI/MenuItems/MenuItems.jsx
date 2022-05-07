import React from 'react'
import s from './MenuItems.module.sass'
export default function MenuItems({ children }) {
	return (
		<li className={s.menu_item}>
			<a href="#" >
				{children}
			</a>
		</li>
	)
}
