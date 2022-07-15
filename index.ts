import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const postData = await prisma.wp_posts.findMany();
	const posts = postData.map(({ ID, post_title, guid, post_content }) => {
		return {
			ID,
			post_title,
			post_content,
			guid,
		};
	});

	console.log(posts);
}

main();
