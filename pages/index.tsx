import Head from "next/head";
import data from "../data.json";
import Image from "next/image";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md  hover:scale-105 transition-all border border-gray-300 mb-3 bg-gray-100"
    >
      <div className="flex text-center w-full items-center">
        {image && (
          <Image
            className="rounded-sm"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
        <h2 className="font-semibold w-full text-center text-gray-800">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Linktree Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col mx-auto w-full justify-center mt-16 px-8 items-center">
          <Image
            className="rounded-full"
            alt={data.name}
            src={data.avatar}
            width={96}
            height={96}
          />
          <h1 className="font-semibold mt-4 mb-8 text-[20px] text-gray-800">
            @{data.name}
          </h1>
          {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
}
