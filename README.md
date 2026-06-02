# NHL Reference 

## Description
- A site that allows NHL fans to see stats from all their favorite NHL teams
- The main page lists all NHL teams and their basic information
- When you click on a team it will bring you to a page which includes the individual team stats
- This site is built with React and Tailwind css

## Set UP 
- Use `npm start` to run the site from your local server

## Team Data
- Team info and stats come from the official, free NHL public API
  (`api-web.nhle.com` and `api.nhle.com/stats/rest`). The old
  `statsapi.web.nhl.com` endpoints the site used were shut down by the NHL.
- Fetching and normalization happen in Python ([python/fetch_teams.py](python/fetch_teams.py)),
  which writes a static [src/data/teams.json](src/data/teams.json) that the React
  app imports — no live API calls from the browser.
- To refresh the data:
  ```
  pip install -r python/requirements.txt
  npm run fetch-data        # or: python python/fetch_teams.py
  ```

## Live Link 
- https://hthomp15.github.io/nhl_teams_api/

## ScreenShots 
![homepage](/public/screenshot-01.png)
![team stats](/public/screenshot-02.png)
