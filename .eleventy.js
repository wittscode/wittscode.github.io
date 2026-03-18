module.exports = function (eleventyConfig) {
  // Pass CSS through without processing
  eleventyConfig.addPassthroughCopy("css");

  // Collections: all posts sorted by date descending
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Readable date filter
  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Current year for footer
  eleventyConfig.addFilter("today", () => new Date().getFullYear());

  return {
    pathPrefix: "/witts-blog/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
