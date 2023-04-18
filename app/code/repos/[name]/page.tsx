import Link from "next/link";
import { Suspense } from "react";

import { MdKeyboardBackspace } from "react-icons/md";

import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

function RepoPage(props: { params: { name: string } }) {
  return (
    <div>
      <Link href="/code/repos" className="ancor w-200">
        <MdKeyboardBackspace size={20} /> Back to repos
      </Link>
      <br />

      <h2>Repo Details</h2>
      <Suspense fallback={`Loading Repo...`}>
        {/* @ts-expect-error Async Server Component */}
        <Repo name={props.params.name} />
      </Suspense>
      <Suspense fallback={`Loading directories...`}>
        {/* @ts-expect-error Async Server Component */}
        <RepoDirs name={props.params.name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
