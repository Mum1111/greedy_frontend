'use client';

import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const needLogin = true;
	const router = useRouter();

	useEffect(() => {
		const url = pathName + searchParams.toString();
		if (needLogin && url === '/greedy') {
			router.replace('/login');
		}
		console.log('url', url);
	}, [pathName, searchParams]);

	return null;
}
