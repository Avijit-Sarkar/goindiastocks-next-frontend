import Posts from "@/components/Posts";
import Stories from "@/components/Stories";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>Go India Stocks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto">
        <section className="md:col-span-3">
          {/* Dicussion Forums */}
          <div className="flex space-x-2 p-4 fixed">
            <div>
              <p className="text-center rounded-sm p-2 text-4xl bg-gray-100 text-red-500 font-semibold uppercase">
                Discussion Forum
              </p>
            </div>
          </div>
          {/* Posts */}
          <Posts />
        </section>

        <section className="hidden xl:inline-grid md:col-span-2">
          <div className="fixed">
            {/* Market Stories */}
            <div className="flex space-x-2 p-4">
              <div>
                <p className="text-center rounded-sm p-2 text-xl bg-gray-100 text-red-500 font-semibold uppercase">
                  Market Stories
                </p>
              </div>
            </div>
          </div>
          <Stories />
        </section>
      </main>
    </div>
  );
}
