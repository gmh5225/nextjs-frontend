import Link from 'next/link'
import { FaDiscord, FaGithub, FaYandex } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/common/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/common/Card'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './Auth.module.scss'

export function Auth() {
	return (
		<Card className={styles.card}>
			<CardHeader className={styles.header}>
				<CardTitle>Войти в аккаунт</CardTitle>
				<CardDescription>Войдите в систему с помощью:</CardDescription>
			</CardHeader>
			<CardContent className={styles.content}>
				<Button className={styles.button} variant='outline'>
					<FcGoogle className={styles.icon} />
					<span className={styles.text}>Продолжить через Google</span>
				</Button>
				<Button className={styles.button} variant='outline'>
					<FaGithub className={styles.icon} />
					<span className={styles.text}>Продолжить через Github</span>
				</Button>
				<Button className={styles.button} variant='outline'>
					<FaYandex className={styles.icon} color='#FE0000' />
					<span className={styles.text}>Продолжить через Яндекс</span>
				</Button>
				<Button className={styles.button} variant='outline'>
					<FaDiscord className={styles.icon} color='#5562EA' />
					<span className={styles.text}>Продолжить через Discord</span>
				</Button>
			</CardContent>
			<CardFooter className={styles.footer}>
				При создании учетной записи вы соглашаетесь с нашим{' '}
				<Link
					target='_blank'
					className='text-primary hover:underline'
					href={PUBLIC_URL.agreement()}
				>
					Пользовательским соглашением
				</Link>{' '}
				и{' '}
				<Link
					target='_blank'
					className='text-primary hover:underline'
					href={PUBLIC_URL.privacy()}
				>
					Политикой конфиденциальности
				</Link>
				.
			</CardFooter>
		</Card>
	)
}
