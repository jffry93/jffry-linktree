import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import data from '../data.json';

export default function Home() {
	return (
		<>
			<Head>
				<meta name='theme-color' content='#00008B' />
				<meta
					name='description'
					content='Linktree Clone built with Next.js and Tailwind'
				/>
				<title>Jeffrey Zalischi | Projects</title>
			</Head>
			<div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
				<Image
					className='rounded-full'
					alt={data.name}
					src={data.avatar}
					width={96}
					height={96}
				/>

				<h1 className='font-bold mt-4 mb-8 text-xl text-white'>{data.name}</h1>
				{data.links.map((link) => {
					return <LinkCard key={link.title} {...link} />;
				})}
				<div className='social-container flex items-center gap-4 mt-8 text-white'>
					{data.socials.map((social) => (
						<a
							aria-label={`${social.title} link`}
							key={social.href}
							href={social.href}
							target='_blank'
							rel='noopener noreferrer'
						>
							{social.href.includes('linkedin') ? (
								<LinkedinIcon />
							) : social.href.includes('github') ? (
								<GitHubIcon />
							) : null}
						</a>
					))}
				</div>
			</div>
		</>
	);
}

function LinkCard({
	title,
	href,
	image,
}: {
	title: string;
	href: string;
	image?: string;
}) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className=' flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl'
		>
			<div className=' flex text-center w-full'>
				<div className='w-10 h-10'>
					{image && (
						<div className='image-container'>
							<Image
								className='rounded-sm'
								alt={title}
								src={image}
								width={40}
								height={40}
							/>
						</div>
					)}
				</div>
				<h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>
					{title}
				</h2>
			</div>
		</a>
	);
}

function LinkedinIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 50 50'
			width='33.5'
			height='33.5'
		>
			<path d='M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z' />
		</svg>
	);
}

function GitHubIcon() {
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_9914_10)'>
				<path
					d='M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='clip0_9914_10'>
					<rect width='24' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
}

interface Data {
	name: string;
	avatar: string;
	links: Link[];
	socials: Social[];
}

interface Link {
	href: string;
	title: string;
	image?: string;
}

interface Social {
	href: string;
	title: string;
}
