#CPM - Caché Package Manager
===

_This is still work-in-progress, and we appreciate any help in implementation of missing features_

## TODO list (the nearest and long-term)

- [X] CPM shell
  - [X] list
  - [X] search
  - [X] install
  - [X] help
  - [X] config /get | /set
  - [ ] uninstall
  - [ ] reinstall
  - [x] package 
  - [x]   /create
  - [x]   /delete
  - [x]   /from prj | /from xml
  - [X] export /major | /minor
  - [ ] package /publish
  - [ ] shell extensions API via extending basic class (_desired for 1.0, but not required_)

- [X] Multiple container types
  - [X] XML
  - [X] TGZ

- [X] Multiple metainfo formats
  - [X] metainfo.xml
  - [X] package.json
  - [ ] package.toml

- [ ] build step for source-binary packages (_not required for 1.0_)
  - [ ] CNA support

- [ ] unit testing (_not required for 1.0_)

- [ ] OS command-line wrapper
  - [ ] Linux
  - [ ] Mac OS-X
  - [X] Windows

- [x] site
  - [x] login frontend - work in progress http://intersystems-ru.github.io/CPM/
  - [X] database backend - https://cpmisc.smileupps.com/-/all/

- [ ] initial examples converted
  - [ ]  iknowSocial - *good*;
  - [X]  webterminal - *good*;
  - [ ]  MONLBL Viewer - *good*;
  - [ ]  coslint - OBJ (*good* for _deployed mode_);
  - [ ]  Atom-COS-Studio - mixed (*bad*);
  - [ ]  CNA - binary (*bad*)

