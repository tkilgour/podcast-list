module.exports = {
  listName: "Favourites",
  podcasts: ["This American Life", "Replay All", "Radiolab"],
  podcastList: function() {
    return formatList(this.podcasts);
  }

};

function formatList(podcasts) {
  podcasts = podcasts.join(", ")
  return podcasts;
}