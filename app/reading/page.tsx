import { genPageMetadata } from 'app/seo'
import readingListData from '@/data/readingListData'

export const metadata = genPageMetadata({ title: 'Reading List' })

export default function ReadingList() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Reading List
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Books I've read over the years (inspired by my friend Kyle Duffy). Favorites are highlighted in bold.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-12">
            {readingListData.map((yearData) => (
              <div key={yearData.year} className="space-y-4">
                <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {yearData.year}
                </h2>
                <ul className="space-y-3">
                  {yearData.books.map((book, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {book.favorite ? (
                        <span className="font-bold">
                          {book.title} — {book.author}
                        </span>
                      ) : (
                        <span>
                          {book.title} — {book.author}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
