```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
export default function Page({ session }) {
  // Access session data here
  console.log(session)
  return (
    <>
      <h1>Welcome, {session.user.name}!</h1>
    </>
  );
}
```