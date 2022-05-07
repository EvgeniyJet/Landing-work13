import React from 'react';
import Services from '../Services/Services';
import s from './Content.module.sass'
import imglink from '../Media/bike.png'
const Content = () => {
	const servicesList = [
		{
			title: 'Годовое ТО',
			bgcolor: '#22356F'
		},
		{
			title: 'Выравнивание колес',
			bgcolor: '#0052C1'
		},
		{
			title: 'Настройка переключателей',
			bgcolor: '#76B58B'
		}
	]
	return (
		<main>
			<section className={s.about}>
				<div className={s.about_info}>
					<div className={s.wrap}>
						<h2>Что мы предлагаем</h2>
						<p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
					</div>
				</div>
				<div className={s.about_img}><img src={imglink} alt="" /></div>
			</section>
			<section className={s.trust}>
				<p className={s.trust_desc}>
					Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
				</p>
			</section>
			<section className={s.services}>
				{
					servicesList.map(t =>
						<Services key={t.title} {...t} serviceObject={t} />
					)
				}
			</section>
		</main>
	);
}
export default Content;
