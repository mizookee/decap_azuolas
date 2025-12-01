import { DateTime } from "luxon";

export default function(eleventyConfig) {

  // Copy folders to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Add date filter usable in Nunjucks: {{ date | date("dd LLLL yyyy") }}
  eleventyConfig.addFilter("date", (value, format = "dd LLLL yyyy") => {
    return DateTime.fromJSDate(value).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
