"use strict";function replaceBlogContentAnchor(){$("article a").not("a[href^='#']").attr("target","_blank")}$(function(){replaceBlogContentAnchor()});