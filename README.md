#CPM - Caché Package Manager - http://cpmteam.github.io/CPM/
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
  - [ ] package /update
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
  - [x] login frontend - work in progress http://cpmteam.github.io/CPM/#/repo/webterminal?local=1
  - [X] database backend - https://cpmisc.smileupps.com/-/all/

- [ ] initial examples converted
  - [ ]  iknowSocial - *good*;
  - [X]  webterminal - *good*;
  - [ ]  MONLBL Viewer - *good*;
  - [ ]  coslint - OBJ (*good* for _deployed mode_);
  - [ ]  Atom-COS-Studio - mixed (*bad*);
  - [ ]  CNA - binary (*bad*)

Original announcement has been done on the [InterSystems Developer Community](https://community.intersystems.com/post/part-ii-%E2%80%93-making-community-package-manager) you could join the original discussion, or better yet - go and directly submit [GitHub Issues](https://github.com/cpmteam/CPM/issues)

There is [GitHub project](https://github.com/orgs/cpmteam/projects/1) created, which is covering all the problems we want to address since original announcement and before release 1.0, if you have some spare time, and desire - please select any opened issue you like and try to fix it.

Thanks!
