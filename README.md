# React SSR

Toy app that searches Github repos, with server-side rendering support.

## Installation

    git clone https://github.com/prayerslayer/react-ssr.git
    cd react-ssr
    yarn install
    GH_TOKEN=<personal github token> npm run dist
    npm run server
    curl localhost:3000/react

## How did't go?

* Initial plan was to use lifecycle hooks of react-router to fetch data also on server
* However that didn't work well (lifecycle hooks of components were not executed)
* So I ended up recreating the client state on the server, which doesn't appear like an easily scalable solution
* It works, however
