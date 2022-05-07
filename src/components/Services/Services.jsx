import React from 'react'
import Button from './../UI/Button'
import s from './Services.module.sass'
export default function Services({ serviceObject }) {
	return (
		<div className={s.serviceblock} style={{ backgroundColor: serviceObject.bgcolor }}>
			<h3>{serviceObject.title}</h3>
			<Button>Подробнее</Button>
		</div>
	)
}
