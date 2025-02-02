// import type { GetStaticProps } from 'next';
// import prisma from '../../../lib/prisma';

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.order.findMany();
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };