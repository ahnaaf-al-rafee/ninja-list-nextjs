import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const notFondPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) // works as a back button. meaning redirects to the page from which the user has come
      router.push("/"); //redirects to the homepage
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h3>This page don't exits! </h3>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default notFondPage;
