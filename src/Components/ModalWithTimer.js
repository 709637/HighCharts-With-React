import React, { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const ComingSoon = (props) => {

	const inaugurationDate = new Date('May 23, 2020 21:25:00');

	let cuurentDate = new Date();

	let diffinms = inaugurationDate.getTime() - cuurentDate.getTime();

	const [days, setDay] = useState(Math.floor(diffinms / (1000 * 60 * 60 * 24)));
	diffinms = diffinms - days * (1000 * 60 * 60 * 24);
	const [hours, sethours] = useState(Math.floor(diffinms / (1000 * 60 * 60)));
	diffinms = diffinms - hours * (1000 * 60 * 60);
	const [minutes, setminutes] = useState(Math.floor(diffinms / (1000 * 60)));
	diffinms = diffinms - minutes * (1000 * 60);
	const [seconds, setseconds] = useState(Math.floor(diffinms / 1000));

	console.log("Time Differnece", days, hours, minutes, seconds);

	// setInterval(()=>{
	// 	setseconds(seconds=>seconds-1);
	// },1000)

	useEffect(() => {
		const interval = setInterval(() => {
			setseconds(seconds => {
				console.log(seconds);
				if (seconds === 0) {
					setminutes(minutes => {
						if (minutes === 0 && seconds === 0) {
							sethours(hours => {
								if (hours === 0 && minutes === 0 && seconds === 0) {
									setDay(days => days - 1)
									sethours(hours => 23);
									setminutes(minutes => 59);
									setseconds(seconds => 59);
								}
								return hours - 1;
							})
							setminutes(minutes => 59);
							setseconds(seconds => 59);
						}
						return minutes - 1
					});
					setseconds(seconds => 59);
				}
				return seconds - 1;
			})
		}, 1000);
		return () => clearInterval(interval);
	}, []);




	const [show, setShow] = useState(true);



	const handleClose = () => {
		setShow(false);
		props.history.goBack();
	}
	const handleShow = () => {
		setShow(true);
	}

	return (
		<>
			<Modal show={show} onHide={handleClose} animation={false}
				dialogClassName="modal90w">

				<Modal.Header closeButton>
					<Modal.Title>We’re Launching Soon</Modal.Title>
				</Modal.Header>

				<Modal.Body className="noPadding"><div id="tg-wrapper" className="tg-wrapper tg-haslayout">
					<div className="tg-commingsoonpage">
						<div id="tg-wrapper" className="tg-wrapper tg-haslayout">
							<main id="tg-main" className="tg-main tg-paddingzero tg-haslayout">
								<div className="tg-commingsoonholder">
									<div className="tg-commingsoonbox">
										<div id="tg-comming-sooncounter" className="tg-twocols tg-comming-sooncounter">
											<div className="tg-counterbox">
												<div id="days" className="timer_box"><p>Days</p><h1>{days}</h1></div>
											</div>
											<div className="tg-counterbox">
												<div id="hours" className="timer_box"><p>hrs</p><h1>{hours}</h1></div>
											</div>
											<div className="tg-counterbox">
												<div id="minutes" className="timer_box"><p>Min</p><h1>{minutes}</h1></div>
											</div>
											<div className="tg-counterbox">
												<div id="seconds" className="timer_box"><p>Sec</p><h1>{seconds}</h1></div>
											</div>
										</div>
										<div className="tg-twocols tg-commingsooncontent">
											<strong className="tg-logo">
												<img src="/final/logo.png" alt="image description" />
											</strong>
											<div className="tg-bordertitle">
												<h2>We’re Launching Soon</h2>
												<h3>Seriously, We’re Working Really Hard!</h3>
											</div>
											<div className="tg-description">
												<p>We are Coming with Time Management tool that can Help Service Provider to Manage Their Customer Digitaly, Which can Bring Your Business in wide area of Network, Creat your Business Page, Register your experties and Increse your business Potential.</p>
											</div>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>

				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
                    </Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}


export default withRouter(ComingSoon);
