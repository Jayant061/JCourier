import React from 'react';

export function LoadingLoop(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"  {...props}><path fill="none" stroke="black" strokeDasharray={15} strokeDashoffset={15} strokeLinecap="round" strokeWidth={2} d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>);
}


export function LoadingTwoLoop(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" {...props}><g fill="none" stroke="black" strokeLinecap="round" strokeWidth={2}><path strokeDasharray={60} strokeDashoffset={60} strokeOpacity={0.3} d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path strokeDasharray={15} strokeDashoffset={15} d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>);
}

export function CircleTick(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 16 16" {...props}><g fill="none" stroke="#4BB543" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"></path><path d="m5.75 7.75l2.5 2.5l6-6.5"></path></g></svg>);
}