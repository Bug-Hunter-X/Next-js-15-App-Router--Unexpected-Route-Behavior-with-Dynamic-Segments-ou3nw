```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello World</div>
  );
}

// app/page.js

export default function Page() {
  const router = useRouter();

  const handleRouteChange = (newRoute) => {
    // Ensure to use router.push instead of direct assignment for transitions.
    router.push(newRoute, undefined, { scroll: false }); 
  };

  return (
    <div>
      <h1>App Page</h1>
      <button onClick={() => handleRouteChange('/index')}>Go to Index</button>
    </div>
  );
}
```