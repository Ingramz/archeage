const news = {
  posts: [{
    id: 1,
    title: 'Welcome to archea.ge!',
    body: `Most of you know this site when it was hosted at archeage.mokulu.io. In its current state, this site doesn't do much, because only the front-end of the website (visuals, the user interface) was shared publicly by the original author. The back-end service with data was and will never be shared. There are many good reasons for this: both legal and technical, but also moral for lack of a better word. This means there is a lot of rebuilding to do if there is a desire to restore all the functionality of the site.

When the original site was taken down, I tried to salvage as much website data from the browser tabs I still had open before the shut down. Unfortunately it was not much, but it was still enough to get the timers working well-enough that I could continue using it for my own purposes. Setting up the site on a new domain with the retrieved data was all done in a span of a few hours in August of 2021 and there hasn't been any changes made to the website since.
    
I know many of you also want other functionality back, especially the calculators, however that is going to be a tall order. Several calculators, but especially the folio, depend on up-to-date data that's in the game database, which I do not currently do not have in my possession. But even with the data, it is going to take some effort to build a new back-end service that would work or could be made to work with the current front-end of the website. Doing this as a secondary side project is going to require some time and motivation outside a full-time job and playing ArcheAge.
    
The two weeks off the game due to publisher change have been productive in terms of gathering the resources needed to rebuild the site, however I'm not completely done yet. Once I have all of that figured out, it should go smoother from there on, so stay tuned...
    
In case you wish to report mistakes on website, have suggestions, wish to contribute in any way or just want to have a talk about the website, I've left my Discord user name with a clickable link at the bottom of the website for now. If the interest is there, I might consider opening a new Discord server and setting the entire project a higher priority.
    
But for now, I wish you safe and happy holidays.
    
Ingram  
AAU EU Ardenia`,
    author: 'Ingram',
    createDate: "2021-12-03T12:00:00.000+0000",
    editDate: "2021-12-03T12:00:00.000+0000",
    commentCount: 0
  }],
  page: 1,
  pages: 1,
  pageSize: 5
}

module.exports = (req, res) => {
  res.send(news)
}
