import Link from "next/link"; // Next.jsのLinkコンポーネントをインポート

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="mt-4">
          <Link
            href="/newpage" // 移動先のパス（例：src/app/newpage.tsx）
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Go to New Page
          </Link>
        </div>
      </main>
    </div>
  );
}
