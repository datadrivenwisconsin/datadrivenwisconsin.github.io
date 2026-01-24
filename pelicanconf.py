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
STATIC_PATHS = ['images']

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

# Featured speakers for homepage
FEATURED_SPEAKERS = [
    {
        'name': 'Jim Grant',
        'title': 'VP, Platform Architecture & Engineering',
        'company': 'Direct Supply, Inc.',
        'image': 'James Grant.png',
    },
    {
        'name': 'Steve Kroll',
        'title': 'President',
        'company': 'Granular',
        'image': 'Kroll Headshot.png',
    },
    {
        'name': 'Derek Riley, Ph.D.',
        'title': 'Professor & Program Director',
        'company': 'Milwaukee School of Engineering',
        'image': 'Riley Headshot.jpg',
    },
    {
        'name': 'Jack Flitcroft',
        'title': 'CoFounder & Head of AI',
        'company': 'Juno',
        'image': 'Flitcroft Headshot.jpg',
    },
]

# Sponsors
SPONSORS = [
    {'name': 'Xorbix Technologies', 'logo': 'Xorbix Logo - Complete Transparent (Black Text)).png', 'tier': 'zettabyte'},
    {'name': 'nvisia', 'logo': 'NV_Primary.png', 'tier': 'zettabyte'},
    {'name': 'Alation', 'logo': 'Alation-Logo-Primary.png', 'tier': 'exabyte'},
    {'name': 'Databricks', 'logo': 'Databricks Logo Primary Lockup primary-lockup-full-color-rgb-4000x634.png', 'tier': 'exabyte'},
    {'name': 'SysLogic', 'logo': 'SysLogic_Logo_wTag_OD_RGB_highres.png', 'tier': 'exabyte'},
    {'name': 'MSOE', 'logo': 'MSOE logo.png', 'tier': 'hosting'},
    {'name': 'Direct Supply', 'logo': '_DS_Corporate_Primary_RGB.png', 'tier': 'hosting'},
]

# Navigation links
LINKS = (
    ("Speakers", "/pages/speakers.html"),
    ("Schedule", "/pages/schedule.html"),
    ("Sponsors", "/pages/sponsors.html"),
    ("About", "/pages/about.html"),
    ("Team", "/pages/team.html"),
    ("Past Events", "/pages/past-events.html"),
)

SOCIAL = ()
