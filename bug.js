```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return <p>Access Denied</p>;
  }
  // ...rest of your code
}
```