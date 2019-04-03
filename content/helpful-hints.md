---
title: Helpful Hints for Me
image: /images/ember.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
author: robot
date: Fri Mar 15 2019 09:52:00 GMT+0100 (IST)
tags:
  - getting-started
---

A collection of helpful hints provided by the original author.

# Tagging

## Basic tagging

When you write a post, you can assign tags to help differentiate between categories of content. For example, you might tag some posts with `News` and other posts with `Cycling`, which would create two distinct categories of content listed on `/tag/news/` and `/tag/cycling/`, respectively.

If you tag a post with both `News` *and* `Cycling` - then it appears in both sections.

Tag archives are like dedicated home-pages for each category of content that you have. They have their own pages and [hopefully soon](https://github.com/empress/ember-ghost/issues/1) will support their own cover images and meta data.


## The primary tag

At the top of every post there is a tiny bit of YAML, and the tags key is an [array](http://yaml.org/spec/1.0/#type-seq) of tags. The first tag in the list is always given the most importance, and some themes will only display the primary tag (the first tag in the list) by default. So you can add the most important tag which you want to show up in your theme, but also add a bunch of related tags which are less important.

```yaml
tags:
  - news
  - cycling
  - bart-stevens
  - extreme-sports
```

In this example, **News** is the primary tag which will be displayed by the theme, but the post will also still receive all the other tags, and show up in their respective archives.

# Markdown Stuff

## Writing code blocks

There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, `like this`. Larger snippets of code can be displayed across multiple lines using triple back ticks:

```
.my-link {
    text-decoration: underline;
}
```

Why would I want to do that...?

## Full bleed images

One neat trick which you can use in Markdown to distinguish between different types of images is to add a `#hash` value to the end of the source URL, and then target images containing the hash with special styling. For example:

![walking](https://casper.ghost.org/v1.0.0/images/walking.jpg#full)

which is styled with...

```
img[src$="#full"] {
    max-width: 100vw;
}
```

This creates full-bleed images in the Casper theme, which stretch beyond their usual boundaries right up to the edge of the window. Every theme handles these types of things slightly differently, but it's a great trick to play with if you want to have a variety of image sizes and styles.


## Reference lists

**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference.


## Full HTML

Perhaps the best part of Markdown is that you're never limited to just Markdown. You can write HTML directly in the Ghost editor and it will just work as HTML usually does. No limits! Here's a standard YouTube embed code as an example:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>


# Really Rigid

Ember Ghost does not, and will never have the concept of user roles!

This is because it is entirely a static system. You can assign authors to posts and generate new ones using `ember generate author` but if you need full user permissions (outside of something like Github) and collaboration features I highly recommend that you sign up for a [hosted Ghost instance](https://ghost.org/).

If you want to start a new post we recommend that you use the built in generator `ember generate post "The next big thing - Ember Ghost"`. This will create a file for you and setup the start of the metadata.

It's a good idea to fill out the metadata on authors, including bio and social links. These will populate rich structured data for posts and generally create more opportunities for themes to fully populate their design.
