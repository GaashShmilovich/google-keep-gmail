import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'

import NoteIndex from './views/notes/NoteIndex.js'
import NoteDetails from '../cmps/notes/NoteDetails.js'

import EmailIndex from './views/gmail/EmailIndex.js'
import EmailDetails from './views/gmail/EmailDetails.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/note',
			component: NoteIndex,
			children: [
				{
					path: ':noteId',
					component: NoteDetails,
				},
			],
		},
		{
			path: '/email',
			component: EmailIndex,
			children: [
				{
					path: ':mailId',
					name: 'EmailDetails',
					component: EmailDetails
				},
			]
		},
	],
}

export const router = createRouter(routerOptions)
