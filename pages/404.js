import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {};
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooop...</h1>
      <h1>That page can not be found</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
    </div>
  );
}
