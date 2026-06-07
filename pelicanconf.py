#!/usr/bin/env python
# -*- coding: utf-8 -*-

AUTHOR = 'Data-Driven Wisconsin'
SITENAME = 'Data-Driven Wisconsin'
SITEURL = ""

PATH = "content"
THEME = "theme"

TIMEZONE = 'US/Central'
DEFAULT_LANG = 'en'

# Static paths
STATIC_PATHS = ['images', 'files']

# Working/source files kept in content but not published
IGNORE_FILES = ['_drafts']

# URL settings
PAGE_URL = 'pages/{slug}.html'
PAGE_SAVE_AS = 'pages/{slug}.html'
ARTICLE_URL = '{slug}.html'
ARTICLE_SAVE_AS = '{slug}.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Disable default pages
AUTHOR_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
TAG_SAVE_AS = ''
ARCHIVES_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

# ========================================
# CONFERENCE DATA
# ========================================

# Navigation links
LINKS = (
    ("Home", "/"),
    ("Speakers", "/pages/speakers.html"),
    ("Schedule", "/pages/schedule.html"),
    ("Attending", "/pages/attending.html"),
    ("Sponsors", "/pages/sponsors.html"),
    ("About", "/pages/about.html"),
    ("Past Events", "/pages/past-events.html"),
)

SOCIAL = ()
