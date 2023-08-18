import React, { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY

function News() {
  let [value, setValue] = useState("Asjad");


  async function getNews() {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    let result = await response.json();
    // console.log(result)
    // console.log(result.articles);

    let newsImage = result.articles.slice(0, 10).map((feed) => {
      return (
        // <img src={feed.urlToImage} />
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={feed.urlToImage} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{feed.title}</div>
            <p class="text-gray-700 text-base">
              {feed.description}
            </p>
            <button class="font-bold text-xl" >Read More</button>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      )
    })
    // console.log(newsImage)
    setValue(newsImage)


  }
  getNews();
  return <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">I am Asjad R {value}</div>
}

export default News;


// password news-api - h58WaBpBkF5b@5A
// apikey - 3811474febd041648b19dbee3263c8bd