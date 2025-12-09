interface Book {
  title: string
  author: string
  favorite?: boolean // Mark favorite books to display in bold
}

interface ReadingYear {
  year: number
  books: Book[]
}

const readingListData: ReadingYear[] = [
  {
    year: 2025,
    books: [
    { title: 'The Art of Doing Science and Engineering', author: 'Richard W. Hamming', favorite: true },
    {title: 'What it Takes: Lessons in the Pursuit of Excellence', author: 'Stephen A. Schwarzman' },
      { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' },
      { title: 'Slow Horses', author: 'Mick Herron' },
      { title: 'Revenge of the Tipping Point', author: 'Malcolm Gladwell' },
      { title: 'Captive Paradise', author: 'James L. Haley' },
      { title: 'Chip War', author: 'Chris Miller', favorite: true },
      { title: 'Viral', author: 'Alina Chan & Matt Ridley' },
    { title: '1Q84', author: 'Haruki Murakami' },
      { title: 'Boom: Bubbles and the End of Stagnation', author: 'Byrne Hobart & Tobias Huber' },
      // Add more books here
    ],
  },
]

export default readingListData
