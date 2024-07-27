import type { Metadata } from 'next'

import { SignIn } from './SignIn'

export const metadata: Metadata = {
	title: 'Авторизация'
}

export default function SignInPage() {
	return <SignIn />
}
